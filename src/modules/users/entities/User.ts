import TrailStatus from '@config/status';
import Appointment from '@modules/appointments/entities/Appointment';

class User {
  id?: string;

  createAt!: Date;

  updateAt?: Date;

  name!: string;

  email!: string;

  password!: string;

  status!: TrailStatus;

  avatar?: string;

  Appointmen!: Appointment[];
}

export default User;
