import jwt from 'jsonwebtoken'
import { errHandeler } from '../utils/appErrorHandler.js'

export const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return errHandeler('Unauthorized', 'fail', 401)
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY)
        next()
    } catch (error) {
        const err = errHandeler('Invalid token', 'fail', 401)
        return next(err)
    }

}