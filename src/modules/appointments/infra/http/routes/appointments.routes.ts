import { Router } from 'express';

import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticaded';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRoutes = Router();

const appointmentsController = new AppointmentsController();

appointmentsRoutes.use(ensureAuthenticaded);

appointmentsRoutes.get('/', appointmentsController.index);

appointmentsRoutes.post('/', appointmentsController.create);

export default appointmentsRoutes;
