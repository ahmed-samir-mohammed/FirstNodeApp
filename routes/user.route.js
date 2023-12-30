import { Router } from 'express';
import { addNewUser, deleteUser, getAllUsers, getUser, login, register, updateUser } from '../controllers/user.controller.js';
export const userRouter = Router();

// Get all Users

// Register

// Login
userRouter.route('/')
    .get(getAllUsers)
    .post(addNewUser)

userRouter.route('/register')
    .post(register)

userRouter.route('/login')
    .post(login)

userRouter.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser)