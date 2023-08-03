import { Schema } from 'mongoose'

const Review = new Schema({
  clientId: {
    type: Number,
    required: true,
  },
  mark: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
})

export default Review
