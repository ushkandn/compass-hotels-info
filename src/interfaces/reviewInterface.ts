import { Document } from 'mongoose'

export interface Review extends Document {
  clientId: Number
  mark: Number
  comment?: String
}
