import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import '@shared/container';
import 'express-async-errors';
import UploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from './routes';

const app = express();

app.use(express.json());

app.use('/files', express.static(UploadConfig.directory));

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3000, () => {
  console.log('Server is running in port 3000!');
});
