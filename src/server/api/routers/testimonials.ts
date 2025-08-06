import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  adminProcedure,
} from '~/server/api/trpc/trpc';

export const testimonialsRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        isActive: z.boolean().optional().default(true),
        limit: z.number().min(1).max(50).optional().default(10),
        offset: z.number().min(0).optional().default(0),
      })
    )
    .query(async ({ ctx, input }) => {
      const where = {
        isActive: input.isActive,
      };

      const [testimonials, total] = await Promise.all([
        ctx.prisma.testimonial.findMany({
          where,
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
          take: input.limit,
          skip: input.offset,
        }),
        ctx.prisma.testimonial.count({ where }),
      ]);

      return {
        testimonials,
        total,
        hasMore: input.offset + input.limit < total,
      };
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.testimonial.findUnique({
        where: {
          id: input.id,
        },
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });
    }),

  getFeatured: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(20).optional().default(6),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.testimonial.findMany({
        where: {
          isActive: true,
          rating: {
            gte: 4, // Only show 4+ star reviews as featured
          },
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
        orderBy: [
          {
            rating: 'desc',
          },
          {
            createdAt: 'desc',
          },
        ],
        take: input.limit,
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        content: z.string().min(10).max(1000),
        rating: z.number().min(1).max(5),
        name: z.string().min(1).optional(), // Allow override of user name
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.testimonial.create({
        data: {
          content: input.content,
          rating: input.rating,
          name: input.name || ctx.session.user.name || 'Anonymous',
          userId: ctx.session.user.id,
        },
        include: {
          user: {
            select: {
              name: true,
            },
          },
        },
      });
    }),

  createGuest: publicProcedure
    .input(
      z.object({
        content: z.string().min(10).max(1000),
        rating: z.number().min(1).max(5),
        name: z.string().min(1),
        email: z.string().email().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      let userId = null;
      
      // If email is provided, try to find or create user
      if (input.email) {
        const user = await ctx.prisma.user.upsert({
          where: { email: input.email },
          update: {
            name: input.name,
          },
          create: {
            email: input.email,
            name: input.name,
          },
        });
        userId = user.id;
      }
      
      return ctx.prisma.testimonial.create({
        data: {
          content: input.content,
          rating: input.rating,
          name: input.name,
          userId,
          isActive: false, // Require admin approval for guest testimonials
        },
      });
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string(),
        content: z.string().min(10).max(1000).optional(),
        rating: z.number().min(1).max(5).optional(),
        name: z.string().min(1).optional(),
        isActive: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.prisma.testimonial.update({
        where: { id },
        data,
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.testimonial.delete({
        where: {
          id: input.id,
        },
      });
    }),

  approve: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.testimonial.update({
        where: { id: input.id },
        data: { isActive: true },
      });
    }),

  getStats: adminProcedure.query(async ({ ctx }) => {
    const [total, pending, averageRating] = await Promise.all([
      ctx.prisma.testimonial.count(),
      ctx.prisma.testimonial.count({
        where: { isActive: false },
      }),
      ctx.prisma.testimonial.aggregate({
        where: { isActive: true },
        _avg: { rating: true },
      }),
    ]);

    return {
      total,
      pending,
      averageRating: averageRating._avg.rating || 0,
    };
  }),
});