import jwt from 'jsonwebtoken'

export const genrateJWT = async (payload) => {
    const token = await jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1d' },
    )

    return token
}