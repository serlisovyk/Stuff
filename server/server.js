import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'
import connectDB from './db.js'
import routes from './routes/router.js'
import errorHandler from './middlewares/errorHandlingMiddleware.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use('/', routes)
app.use(errorHandler)

connectDB()

app.listen(process.env.PORT, err =>
  err
    ? console.error(`Error: ${err.message}`)
    : console.log(`Server is running on port ${process.env.PORT}`)
)
