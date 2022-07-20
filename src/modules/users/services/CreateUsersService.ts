/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import 'reflect-metadata';
import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import { IUsersRepository } from '../repositories/IUsersRepository';
import User from '../entities/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) { }

  public async execute({ name, email, password }: Request): Promise<User> {
    const isAlreadyEmailExists = await this.usersRepository.findByEmail(email);

    const hashedPassword = await hash(password, 8);

    if (isAlreadyEmailExists) {
      throw new AppError('This email already used', 401);
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    delete user.password;

    return user;
  }
}

export default CreateUsersService;
