import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import router from './routes/app.routes.js'

const app = express()
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'get, head, put, post, delete, patch',
    credentials: true,
    optionsSuccessStatus: 204
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)
 
app.listen(3000)

console.log('http://localhost:3000')