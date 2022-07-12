import { container } from 'tsyringe';

import { IAppointmentsRepository } from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/prisma/AppointmentsRepository';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/prisma/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
