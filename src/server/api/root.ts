import { createTRPCRouter } from '~/server/api/trpc/trpc';
import { servicesRouter } from '~/server/api/routers/services';
import { appointmentsRouter } from '~/server/api/routers/appointments';
import { portfolioRouter } from '~/server/api/routers/portfolio';
import { testimonialsRouter } from '~/server/api/routers/testimonials';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  services: servicesRouter,
  appointments: appointmentsRouter,
  portfolio: portfolioRouter,
  testimonials: testimonialsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;