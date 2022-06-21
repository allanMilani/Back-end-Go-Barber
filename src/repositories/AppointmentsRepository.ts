import { Appointment } from '@prisma/client';

export interface AppointmentCreateData {
  provider_id: string;
  date: Date;
}

export interface AppointmentsRepository {
  all: () => Promise<Appointment[]>;
  create: (data: AppointmentCreateData) => Promise<Appointment>;
  findByDate: (date: Date) => Promise<Appointment | null>;
}
