import { isEqual } from 'date-fns';
import Appointment from '../models/Appointments';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  all(): Appointment[] {
    return this.appointments;
  }

  findByDate(date: Date): Appointment | null {
    const isAlreadyBookedAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return isAlreadyBookedAppointment || null;
  }

  create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
