import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  adminProcedure,
} from '~/server/api/trpc/trpc';

export const servicesRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        category: z.string().optional(),
        isActive: z.boolean().optional().default(true),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.service.findMany({
        where: {
          ...(input.category && { category: input.category }),
          isActive: input.isActive,
        },
        orderBy: {
          name: 'asc',
        },
      });
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.service.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  getCategories: publicProcedure.query(async ({ ctx }) => {
    const services = await ctx.prisma.service.findMany({
      where: {
        isActive: true,
      },
      select: {
        category: true,
      },
      distinct: ['category'],
    });
    
    return services.map(service => service.category);
  }),

  create: adminProcedure
    .input(
      z.object({
        name: z.string().min(1),
        description: z.string().min(1),
        price: z.number().positive(),
        duration: z.number().positive(),
        category: z.string().min(1),
        imageUrl: z.string().url().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.service.create({
        data: input,
      });
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().min(1).optional(),
        description: z.string().min(1).optional(),
        price: z.number().positive().optional(),
        duration: z.number().positive().optional(),
        category: z.string().min(1).optional(),
        imageUrl: z.string().url().optional(),
        isActive: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.prisma.service.update({
        where: { id },
        data,
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.service.delete({
        where: {
          id: input.id,
        },
      });
    }),
});