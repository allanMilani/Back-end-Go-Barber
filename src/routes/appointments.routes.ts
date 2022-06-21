import { Router } from 'express';
import { parseISO } from 'date-fns';
import CreateAppointmentService from '../services/CreateAppointmentService';
import PrismaAppointmentsRepository from '../repositories/prisma/PrismaAppointmentsRepository';

const appointmentsRoutes = Router();

const prismaAppointmentsRepository = new PrismaAppointmentsRepository();

appointmentsRoutes.get('/', async (req, res) => {
  const appointments = await prismaAppointmentsRepository.all();

  return res.json(appointments);
});

appointmentsRoutes.post('/', async (req, res) => {
  try {
    const { provider_id, date } = req.body;

    const parseDate = parseISO(date);

    const createAppointmentService = new CreateAppointmentService();

    const appointment = await createAppointmentService.execute({
      provider_id,
      date: parseDate,
    });

    return res.json(appointment);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

export default appointmentsRoutes;
