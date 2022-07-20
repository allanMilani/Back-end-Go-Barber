import { UserCreateData } from '../dtos/UserCreateDTO';
import { UserUpdateAvatar } from '../dtos/UserUpdateAvatarDTO';
import User from '../entities/User';

export interface IUsersRepository {
  create: (data: UserCreateData) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
  findById: (user_id: string) => Promise<User | null>;
  updateAvatar: (data: UserUpdateAvatar) => Promise<User>;
}
