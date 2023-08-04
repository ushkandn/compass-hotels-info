import { Schema } from 'mongoose'
import { IRoom } from '../interfaces/roomInterface.js'
const Room = new Schema<IRoom>({
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
