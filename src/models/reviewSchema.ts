import { Schema } from 'mongoose'
import { IReview } from '../interfaces/reviewInterface.js'

const Review = new Schema<IReview>({
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
