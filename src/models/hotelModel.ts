import { Schema, model } from 'mongoose'
import Room from './roomSchema.js'
import Review from './reviewSchema.js'

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
    type: [Review],
  },
})

export default model('hotel', hotelSchema)
