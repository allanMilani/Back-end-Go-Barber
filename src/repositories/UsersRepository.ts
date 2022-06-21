import { User } from '@prisma/client';

export interface UserCreateData {
  name: string;
  email: string;
  password: string;
}

export interface UsersRepository {
  create: (data: UserCreateData) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
}
