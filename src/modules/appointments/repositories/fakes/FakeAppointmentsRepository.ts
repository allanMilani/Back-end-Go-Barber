import { uuid } from 'uuidv4';

import Appointment from '@modules/appointments/entities/Appointment';
import { IAppointmentsRepository } from '@modules/appointments/repositories/IAppointmentsRepository';
import { AppointmentCreateData } from '@modules/appointments/dtos/AppointmentCreateDTO';

import { TrailStatus } from '@config/status';

class FakeAppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  async all(): Promise<Appointment[]> {
    return this.appointments;
  }

  async create({
    provider_id,
    date,
  }: AppointmentCreateData): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, {
      id: uuid(),
      date,
      provider_id,
    });

    this.appointments.push(appointment);

    return appointment;
  }

  async findByDate(date: Date): Promise<Appointment | undefined> {
    const appointments = this.appointments.find(
      appointment =>
        appointment.date === date && appointment.status === TrailStatus.ACTIVE,
    );

    return appointments;
  }
}

export default FakeAppointmentsRepository;
