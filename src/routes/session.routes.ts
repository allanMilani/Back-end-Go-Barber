import { Router } from 'express';
import AuthenticationUserService from '../services/AuthenticationUserService';

const SessionRoutes = Router();

SessionRoutes.post('/', async (req, res) => {
  const { email, password } = req.body;

  const authenticationUserService = new AuthenticationUserService();

  const { user, token } = await authenticationUserService.execute({ email, password })

  return res.json({ user, token });
});

export default SessionRoutes;
