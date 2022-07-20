/* eslint-disable import/prefer-default-export */
/* eslint-disable no-constructor-return */

import { TrailStatus } from '@config/status';

class Appointment {
  id!: string;

  createAt!: Date;

  updateAt!: Date;

  provider_id!: string | null;

  date!: Date;

  status!: TrailStatus;
}

export default Appointment;
