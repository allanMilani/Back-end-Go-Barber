import { TrailStatus } from '@config/status';

class User {
  id?: string;

  createAt!: Date;

  updateAt?: Date;

  name!: string;

  email!: string;

  password!: string;

  status!: TrailStatus;

  avatar?: string;
}

export default User;
