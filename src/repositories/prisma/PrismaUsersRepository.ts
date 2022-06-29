import { User } from '@prisma/client';
import prisma from '../../database';
import { UserCreateData, UsersRepository, UserUpdateAvatar } from "../UsersRepository";

class PrismaUsersRepository implements UsersRepository {
  async create({ name, email, password }: UserCreateData): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const isAlreadyEmailExists = await prisma.user.findFirst({
      where: {
        email
      }
    });

    return isAlreadyEmailExists;
  }

  async findById(user_id: string): Promise<User | null> {
    const isAlreadyUserExists = await prisma.user.findFirst({
      where: {
        id: user_id
      }
    });

    return isAlreadyUserExists;
  }

  async updateAvatar({ user_id, avatar }: UserUpdateAvatar): Promise<User> {
    const user = await prisma.user.update({
      where: {
        id: user_id
      },
      data: {
        avatar: avatar
      }
    });

    return user;
  }

}

export default PrismaUsersRepository;
