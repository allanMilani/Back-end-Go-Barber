/* eslint-disable prettier/prettier */
import { Appointment } from '@prisma/client';
import { injectable, inject } from 'tsyringe';
import AppointmentsRepository from '../infra/prisma/AppointmentsRepository';

@injectable()
class ListAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: AppointmentsRepository,
  ) { }

  async execute(): Promise<Appointment[]> {
    const appointments = await this.appointmentRepository.all();

    return appointments;
  }

}

export default ListAppointmentService;
