import { AppointmentCreateData } from '../dtos/AppointmentCreateDTO';
import Appointment from '../entities/Appointment';

export interface IAppointmentsRepository {
  all: () => Promise<Appointment[]>;
  create: (data: AppointmentCreateData) => Promise<Appointment>;
  findByDate: (date: Date) => Promise<Appointment | undefined>;
}
