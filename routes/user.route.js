import { Router } from 'express';
import { deleteUser, getAllUsers, getUser, login, register, updateUser } from '../controllers/user.controller.js';
export const userRouter = Router();

userRouter.route('/')
    .get(getAllUsers)

userRouter.route('/register')
    .post(register)

userRouter.route('/login')
    .post(login)

userRouter.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)