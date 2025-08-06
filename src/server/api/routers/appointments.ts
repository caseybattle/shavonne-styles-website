import { z } from 'zod';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  adminProcedure,
} from '~/server/api/trpc/trpc';
import { AppointmentStatus } from '@prisma/client';

export const appointmentsRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        serviceId: z.string(),
        date: z.date(),
        time: z.string(),
        notes: z.string().optional(),
        // Guest booking fields
        guestName: z.string().optional(),
        guestEmail: z.string().email().optional(),
        guestPhone: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { guestName, guestEmail, guestPhone, ...appointmentData } = input;
      
      // If user is authenticated, use their ID
      if (ctx.session?.user?.id) {
        return ctx.prisma.appointment.create({
          data: {
            ...appointmentData,
            userId: ctx.session.user.id,
          },
          include: {
            service: true,
            user: true,
          },
        });
      }
      
      // For guest bookings, create a user first
      if (guestEmail && guestName) {
        const user = await ctx.prisma.user.upsert({
          where: { email: guestEmail },
          update: {
            name: guestName,
            phone: guestPhone,
          },
          create: {
            email: guestEmail,
            name: guestName,
            phone: guestPhone,
          },
        });
        
        return ctx.prisma.appointment.create({
          data: {
            ...appointmentData,
            userId: user.id,
          },
          include: {
            service: true,
            user: true,
          },
        });
      }
      
      throw new Error('Either authentication or guest information is required');
    }),

  getByUser: protectedProcedure
    .input(
      z.object({
        status: z.nativeEnum(AppointmentStatus).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.appointment.findMany({
        where: {
          userId: ctx.session.user.id,
          ...(input.status && { status: input.status }),
        },
        include: {
          service: true,
        },
        orderBy: {
          date: 'desc',
        },
      });
    }),

  getAll: adminProcedure
    .input(
      z.object({
        status: z.nativeEnum(AppointmentStatus).optional(),
        date: z.date().optional(),
        serviceId: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return ctx.prisma.appointment.findMany({
        where: {
          ...(input.status && { status: input.status }),
          ...(input.date && { 
            date: {
              gte: new Date(input.date.setHours(0, 0, 0, 0)),
              lt: new Date(input.date.setHours(23, 59, 59, 999)),
            }
          }),
          ...(input.serviceId && { serviceId: input.serviceId }),
        },
        include: {
          service: true,
          user: true,
        },
        orderBy: {
          date: 'asc',
        },
      });
    }),

  updateStatus: adminProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.nativeEnum(AppointmentStatus),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.appointment.update({
        where: { id: input.id },
        data: { status: input.status },
        include: {
          service: true,
          user: true,
        },
      });
    }),

  cancel: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Verify the appointment belongs to the user
      const appointment = await ctx.prisma.appointment.findUnique({
        where: { id: input.id },
      });
      
      if (!appointment || appointment.userId !== ctx.session.user.id) {
        throw new Error('Appointment not found or unauthorized');
      }
      
      return ctx.prisma.appointment.update({
        where: { id: input.id },
        data: { status: AppointmentStatus.CANCELLED },
      });
    }),

  getAvailableSlots: publicProcedure
    .input(
      z.object({
        serviceId: z.string(),
        date: z.date(),
      })
    )
    .query(async ({ ctx, input }) => {
      // Get service duration
      const service = await ctx.prisma.service.findUnique({
        where: { id: input.serviceId },
        select: { duration: true },
      });
      
      if (!service) {
        throw new Error('Service not found');
      }
      
      // Get existing appointments for the date
      const existingAppointments = await ctx.prisma.appointment.findMany({
        where: {
          serviceId: input.serviceId,
          date: {
            gte: new Date(input.date.setHours(0, 0, 0, 0)),
            lt: new Date(input.date.setHours(23, 59, 59, 999)),
          },
          status: {
            not: AppointmentStatus.CANCELLED,
          },
        },
        select: {
          time: true,
        },
      });
      
      // Generate available time slots (9 AM to 6 PM)
      const allSlots = [];
      for (let hour = 9; hour < 18; hour++) {
        allSlots.push(`${hour.toString().padStart(2, '0')}:00`);
        allSlots.push(`${hour.toString().padStart(2, '0')}:30`);
      }
      
      // Filter out booked slots
      const bookedTimes = existingAppointments.map(apt => apt.time);
      const availableSlots = allSlots.filter(slot => !bookedTimes.includes(slot));
      
      return availableSlots;
    }),
});