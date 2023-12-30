import { Schema, model } from 'mongoose';

const productSechma = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export default new model('Products', productSechma);