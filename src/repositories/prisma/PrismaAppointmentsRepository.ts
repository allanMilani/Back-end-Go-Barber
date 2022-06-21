import { Appointment } from '@prisma/client';
import prisma from '../../database';
import {
  AppointmentCreateData,
  AppointmentsRepository,
} from '../AppointmentsRepository';

class PrismaAppointmentsRepository implements AppointmentsRepository {
  async all(): Promise<Appointment[]> {
    const appointments = await prisma.appointment.findMany();

    return appointments;
  }

  async create({
    provider_id,
    date,
  }: AppointmentCreateData): Promise<Appointment> {
    const appointment = await prisma.appointment.create({
      data: {
        provider_id,
        date,
      },
    });

    return appointment;
  }

  async findByDate(date: Date): Promise<Appointment | null> {
    const appointment = await prisma.appointment.findFirst({
      where: {
        date,
      },
    });

    return appointment || null;
  }
}

export default PrismaAppointmentsRepository;
