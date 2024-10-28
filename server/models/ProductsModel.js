import { Schema, model } from 'mongoose'

const productsSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})

export default model('Products', productsSchema)
