import { Schema, model } from 'mongoose'

const categoriesSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

export default model('Categories', categoriesSchema)
