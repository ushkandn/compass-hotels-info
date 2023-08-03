import { Document } from 'mongoose'

export interface Hotel extends Document {
  name: string
  location: string
  gallery: string[]
  description: string
  phone: string
}
