import { Appointment } from '@prisma/client';
import { AppointmentCreateData } from '../dtos/AppointmentCreateDTO';

export interface IAppointmentsRepository {
  all: () => Promise<Appointment[]>;
  create: (data: AppointmentCreateData) => Promise<Appointment>;
  findByDate: (date: Date) => Promise<Appointment | null>;
}
