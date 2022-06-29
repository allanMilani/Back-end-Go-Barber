import { User } from "@prisma/client";
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import PrismaUsersRepository from "../repositories/prisma/PrismaUsersRepository";
import AppError from "../errors/AppError";

interface Request {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {

    const prismaUsersRepository = new PrismaUsersRepository();

    const user = await prismaUsersRepository.findById(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can change avatar.", 401);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }

    }

    const userUpdated = await prismaUsersRepository.updateAvatar({ user_id, avatar: avatarFileName });

    return userUpdated;
  }
}

export default UpdateUserAvatarService;
