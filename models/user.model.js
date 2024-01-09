import { Schema, model } from 'mongoose';
import validator from 'validator' 
const userSechma = new Schema({
    fisrtName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [
            validator.isEmail,
            'Invalid email'
        ]
    },
    password: {
        type: String,
        required: true
    }
})

export default new model('User', userSechma);