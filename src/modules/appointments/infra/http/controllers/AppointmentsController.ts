import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { parseISO } from 'date-fns';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import ListAppointmentService from '@modules/appointments/services/ListAppointmentService';

class AppointmentsController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listAppointmentsService = container.resolve(ListAppointmentService);

    const appointments = await listAppointmentsService.execute();

    return res.json(appointments);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { provider_id, date } = req.body;

    const parseDate = parseISO(date);

    const createAppointmentService = container.resolve(
      CreateAppointmentService,
    );

    const appointment = await createAppointmentService.execute({
      provider_id,
      date: parseDate,
    });

    return res.json(appointment);
  }
}

export default AppointmentsController;
