import { Router } from 'express';
import { deleteUser, getAllUsers, getUser, login, register, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';
export const userRouter = Router();

userRouter.route('/')
    .get(verifyToken, getAllUsers)

userRouter.route('/register')
    .post(register)

userRouter.route('/login')
    .post(login)

userRouter.route('/:id')
    .get(verifyToken, getUser)
    .delete(verifyToken, deleteUser)
    .put(verifyToken, updateUser)