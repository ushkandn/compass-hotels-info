import hotelModel from '../models/hotelModel.js'
import { Request, Response } from 'express'

class reviewController {
  async create(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const { clientId, mark, comment } = req.body
      const review = {
        clientId,
        mark,
        comment,
      }
      const hotel = await hotelModel.findById(hotelId)
      if (!hotel) {
        res.status(404).json({ message: 'Отель не найден' })
      } else {
        hotel.reviews.push(review)
        await hotel.save()
        res.json(review)
      }
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось создать отзыв об отеле' })
    }
  }

  async getOne(req: Request, res: Response) {
    const { reviewId } = req.params
  }
}
export default new reviewController()
