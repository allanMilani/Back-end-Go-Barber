import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';
import ensureAuthenticaded from '../middlewares/ensureAuthenticaded';
import CreateUsersService from '../services/CreateUsersService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';


const usersRoutes = Router();
const upload = multer(uploadConfig);

usersRoutes.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const createUsersService = new CreateUsersService();

  const user = await createUsersService.execute({ name, email, password });

  return res.json(user);
});

usersRoutes.patch('/avatar', ensureAuthenticaded, upload.single('avatar'), async (req, res) => {
  const updateUserAvatarService = new UpdateUserAvatarService();

  const user = await updateUserAvatarService.execute({
    user_id: req.user.id,
    avatarFileName: req.file.filename
  });

  delete user.password;

  return res.json(user);
});

export default usersRoutes;
