import prisma from '@shared/infra/prisma';
import { IAppointmentsRepository } from '@modules/appointments/repositories/IAppointmentsRepository';
import { AppointmentCreateData } from '@modules/appointments/dtos/AppointmentCreateDTO';
import Appointment from '@modules/appointments/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
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

  async findByDate(date: Date): Promise<Appointment | undefined> {
    const appointment = await prisma.appointment.findFirst({
      where: {
        date,
      },
    });

    return appointment || undefined;
  }
}

export default AppointmentsRepository;
