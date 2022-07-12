/* eslint-disable prettier/prettier */
import { Appointment } from '@prisma/client';
import { startOfHour } from 'date-fns';
import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import { IAppointmentsRepository } from '../repositories/IAppointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentsRepository,
  ) { }

  async execute({ provider_id, date }: Request): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const isAlreadyBookedAppointment =
      await this.appointmentRepository.findByDate(appointmentDate);

    if (isAlreadyBookedAppointment) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = this.appointmentRepository.create({
      provider_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
