import { User } from "@prisma/client";
import { hash } from "bcryptjs";
import PrismaUsersRepository from "../repositories/prisma/PrismaUsersRepository";

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUsersService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const prismaUsersRepository = new PrismaUsersRepository();

    const isAlreadyEmailExists = await prismaUsersRepository.findByEmail(email);

    const hashedPassword = await hash(password, 8);

    if (isAlreadyEmailExists) {
      throw new Error("This email already used");
    }

    const user = await prismaUsersRepository.create({
      name,
      email,
      password: hashedPassword
    });

    delete user.password;

    return user;
  }
}

export default CreateUsersService;
