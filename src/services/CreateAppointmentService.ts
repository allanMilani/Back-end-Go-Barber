import { Appointment } from '@prisma/client';
import { startOfHour } from 'date-fns';
import AppError from '../errors/AppError';

import PrismaAppointmentsRepository from '../repositories/prisma/PrismaAppointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  async execute({ provider_id, date }: Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const prismaAppointmentsRepository = new PrismaAppointmentsRepository();

    const isAlreadyBookedAppointment =
      await prismaAppointmentsRepository.findByDate(appointmentDate);

    if (isAlreadyBookedAppointment) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = prismaAppointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
