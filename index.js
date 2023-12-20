const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const url = 'mongodb+srv://ahmed:ahmed123@first-product.rpzljej.mongodb.net/FirstProductApp?retryWrites=true&w=majority'

mongoose.connect(url).then(() => {
    console.log('Connected to MongoDB!')
})

const productRouter = require('./routes/product.route') // Handeler request

app.use('/api/products', productRouter)

app.listen(3000, () => {
    console.log('EListening on port 3000!')
})