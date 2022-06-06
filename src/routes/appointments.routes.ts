import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRoutes = Router();

const appointmentsRepository = new AppointmentsRepository();

appointmentsRoutes.get('/', (req, res) => {
  const appointments = appointmentsRepository.all();

  return res.json(appointments);
});

appointmentsRoutes.post('/', (req, res) => {
  try {
    const { provider, date } = req.body;

    const parseDate = parseISO(date);

    const createAppointmentService = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = createAppointmentService.execute({
      provider,
      date: parseDate,
    });

    return res.json(appointment);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

export default appointmentsRoutes;
