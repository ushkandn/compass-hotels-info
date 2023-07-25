import { Schema, model } from 'mongoose'
import Room from './roomSchema.js'

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rooms: {
    type: [Room],
  },
  gallery: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  reviews: {
    ref: 'review',
    type: Schema.Types.ObjectId,
  },
})

export default model('hotel', hotelSchema)
