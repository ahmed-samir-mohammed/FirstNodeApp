const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const url = 'mongodb://localhost:27017/'
const PORT = 3000

mongoose.connect(url).then(() => {
    console.log('Connected to MongoDB!')
})

const productRouter = require('./routes/product.route') // Handeler request

app.use('/api/products', productRouter)

app.listen(PORT, () => {
    console.log(`EListening on port ${PORT}!`)
})

