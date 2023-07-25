import { Schema, model } from 'mongoose'

const reviewSchema = new Schema({
  clientId: {
    type: Number,
    required: true,
    unique: true,
  },
  mark: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
})

export default model('review', reviewSchema)
