import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUsersService from '@modules/users/services/CreateUsersService';

class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUsersService = container.resolve(CreateUsersService);

    const user = await createUsersService.execute({ name, email, password });

    return res.json(user);
  }
}

export default UsersController;
