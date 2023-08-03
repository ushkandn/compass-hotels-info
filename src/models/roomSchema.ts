import { Schema } from 'mongoose'

const Room = new Schema({
  number: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
})
export default Room
