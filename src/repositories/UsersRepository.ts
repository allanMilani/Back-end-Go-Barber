import { User } from '@prisma/client';

export interface UserCreateData {
  name: string;
  email: string;
  password: string;
}

export interface UserUpdateAvatar {
  user_id: string;
  avatar: string;
}

export interface UsersRepository {
  create: (data: UserCreateData) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
  findById: (user_id: string) => Promise<User | null>;
  updateAvatar: (data: UserUpdateAvatar) => Promise<User>;
}
