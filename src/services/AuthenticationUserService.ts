import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import PrismaUsersRepository from "../repositories/prisma/PrismaUsersRepository";
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticationUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const prismaUsersRepository = new PrismaUsersRepository();

    const user = await prismaUsersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Incorrect email/password combinatation.", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Incorrect email/password combinatation.", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id, //id de quem está criando o token
      expiresIn
    });

    delete user.password;

    return {
      user,
      token
    }

  }
}

export default AuthenticationUserService;
