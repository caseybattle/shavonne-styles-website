import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  adminProcedure,
} from '~/server/api/trpc/trpc';

export const portfolioRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        isActive: z.boolean().optional().default(true),
        limit: z.number().min(1).max(100).optional().default(20),
        offset: z.number().min(0).optional().default(0),
      })
    )
    .query(async ({ ctx, input }) => {
      const where = {
        isActive: input.isActive,
        ...(input.category && { category: input.category }),
        ...(input.tags && input.tags.length > 0 && {
          tags: {
            hasSome: input.tags,
          },
        }),
      };

      const [items, total] = await Promise.all([
        ctx.prisma.portfolioItem.findMany({
          where,
          orderBy: {
            createdAt: 'desc',
          },
          take: input.limit,
          skip: input.offset,
        }),
        ctx.prisma.portfolioItem.count({ where }),
      ]);

      return {
        items,
        total,
        hasMore: input.offset + input.limit < total,
      };
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.portfolioItem.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  getCategories: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.portfolioItem.findMany({
      where: {
        isActive: true,
      },
      select: {
        category: true,
      },
      distinct: ['category'],
    });
    
    return items.map(item => item.category);
  }),

  getAllTags: publicProcedure.query(async ({ ctx }) => {
    const items = await ctx.prisma.portfolioItem.findMany({
      where: {
        isActive: true,
      },
      select: {
        tags: true,
      },
    });
    
    const allTags = items.flatMap(item => item.tags);
    return [...new Set(allTags)].sort();
  }),

  create: adminProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        imageUrl: z.string().url(),
        category: z.string().min(1),
        tags: z.array(z.string()).default([]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.portfolioItem.create({
        data: input,
      });
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).optional(),
        description: z.string().optional(),
        imageUrl: z.string().url().optional(),
        category: z.string().min(1).optional(),
        tags: z.array(z.string()).optional(),
        isActive: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.prisma.portfolioItem.update({
        where: { id },
        data,
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.portfolioItem.delete({
        where: {
          id: input.id,
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
      return ctx.prisma.portfolioItem.findMany({
        where: {
          isActive: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: input.limit,
      });
    }),
});