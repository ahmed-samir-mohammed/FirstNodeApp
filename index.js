import { configDotenv } from 'dotenv'
import express, { json } from 'express'
import { connect } from 'mongoose'
import jsend from 'jsend'
import { productRouter } from './routes/product.route.js' // Handeler request
import { userRouter } from './routes/user.route.js' // Handeler request
import cors from 'cors'

const app = express()
app.use(json())
app.use(cors())
configDotenv()

connect(process.env.CONNECTION_URL).then(() => {
    console.log('Connected to MongoDB!')
})

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)

// 404 not found middleware for route
app.all('*', (req, res, next) => {
    res.status(404).json(jsend.error('NOT FOUND'))
})

// Gloabl Error handeler
app.use((error, req, res, next) => {
    ;
    res.status(error.statusCode || 500).json(
        error.status == 'fail'
            ? jsend.fail(error.message)
            : jsend.error(error.message)
    )
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`EListening on port ${process.env.PORT}!`)
})