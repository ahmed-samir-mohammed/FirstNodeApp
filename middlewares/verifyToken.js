import jwt from 'jsonwebtoken'
import { errHandeler } from '../utils/appErrorHandler.js'

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization']
    if (!authHeader) {
        const err = errHandeler('Unauthorized', 'fail', 401)
        return next(err)
    }
    const token = authHeader.split(' ')[1]
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY)
        next()
    } catch (error) {
        const err = errHandeler('Invalid token', 'fail', 401)
        return next(err)
    }

}