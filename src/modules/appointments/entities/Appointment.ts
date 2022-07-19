/* eslint-disable no-constructor-return */
import TrailStatus from '@config/status';
// import User from '@modules/users/entities/User';

class Appointment {
  id!: string;

  createAt!: Date;

  updateAt!: Date;

  // provider?: User;

  provider_id?: string;

  date!: Date;

  status!: TrailStatus;

  // constructor({ id, date, provider_id }: Appointment) {
  //   return Object.assign(this, {
  //     id,
  //     createAt: new Date(),
  //     date,
  //     provider_id,
  //     status: TrailStatus.ACTIVE,
  //   });
  // }

  // static create({ date, provider_id }: Appointment) {
  //   const user = new Appointment({
  //     date,
  //     provider_id,
  //     createAt: new Date(),
  //     status: TrailStatus.ACTIVE,
  //   });
  //   return user;
  // }
}

export default Appointment;
