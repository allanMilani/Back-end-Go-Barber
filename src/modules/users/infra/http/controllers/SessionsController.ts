import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticationUserService from '@modules/users/services/AuthenticationUserService';

class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const authenticationUserService = container.resolve(
      AuthenticationUserService,
    );

    const { user, token } = await authenticationUserService.execute({
      email,
      password,
    });

    return res.json({ user, token });
  }
}

export default SessionsController;
