import { Router } from 'express';
import CreateUsersService from '../services/CreateUsersService';

const usersRoutes = Router();

usersRoutes.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUsersService = new CreateUsersService();

    const user = await createUsersService.execute({ name, email, password });

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

export default usersRoutes;
