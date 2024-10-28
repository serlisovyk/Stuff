import { connect } from 'mongoose'

export default async function connectDB() {
  try {
    await connect(process.env.DB_URL)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}
