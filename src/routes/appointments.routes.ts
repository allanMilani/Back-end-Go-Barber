import { Router } from 'express';
import { parseISO } from 'date-fns';
import CreateAppointmentService from '../services/CreateAppointmentService';
import PrismaAppointmentsRepository from '../repositories/prisma/PrismaAppointmentsRepository';
import ensureAuthenticaded from '../middlewares/ensureAuthenticaded';

const appointmentsRoutes = Router();

const prismaAppointmentsRepository = new PrismaAppointmentsRepository();

appointmentsRoutes.use(ensureAuthenticaded);

appointmentsRoutes.get('/', async (req, res) => {
  const appointments = await prismaAppointmentsRepository.all();

  return res.json(appointments);
});

appointmentsRoutes.post('/', async (req, res) => {
  const { provider_id, date } = req.body;

  const parseDate = parseISO(date);

  const createAppointmentService = new CreateAppointmentService();

  const appointment = await createAppointmentService.execute({
    provider_id,
    date: parseDate,
  });

  return res.json(appointment);
});

export default appointmentsRoutes;
