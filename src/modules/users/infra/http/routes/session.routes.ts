import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const SessionRoutes = Router();

const sessionsController = new SessionsController();

SessionRoutes.post('/', sessionsController.create);

export default SessionRoutes;
