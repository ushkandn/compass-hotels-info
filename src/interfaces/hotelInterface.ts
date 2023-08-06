import { IRoom } from './roomInterface.js'
import { IReview } from './reviewInterface.js'
export interface IHotel {
  name: string
  location: string
  rooms: IRoom[]
  gallery: string[]
  description: string
  phone: string
  reviews: IReview[]
}
