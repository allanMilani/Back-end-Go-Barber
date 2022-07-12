import { User } from '@prisma/client';
import prisma from '@shared/infra/prisma';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { UserCreateData } from '@modules/users/dtos/UserCreateDTO';
import { UserUpdateAvatar } from '@modules/users/dtos/UserUpdateAvatarDTO';

class UsersRepository implements IUsersRepository {
  async create({ name, email, password }: UserCreateData): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const isAlreadyEmailExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return isAlreadyEmailExists;
  }

  async findById(user_id: string): Promise<User | null> {
    const isAlreadyUserExists = await prisma.user.findFirst({
      where: {
        id: user_id,
      },
    });

    return isAlreadyUserExists;
  }

  async updateAvatar({ user_id, avatar }: UserUpdateAvatar): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id: user_id,
      },
      data: {
        avatar,
      },
    });

    return user;
  }
}

export default UsersRepository;
