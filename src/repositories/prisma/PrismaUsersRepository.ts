import { User } from '@prisma/client';
import prisma from '../../database';
import { UserCreateData, UsersRepository } from "../UsersRepository";

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

}

export default PrismaUsersRepository;
