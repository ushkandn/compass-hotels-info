import { Request, Response } from 'express'
import { IReview } from '../interfaces/reviewInterface.js'
import reviewService from '../services/reviewService.js'

class reviewController {
  async create(req: Request, res: Response) {
    try {
      const reviewData = req.body
      const { hotelId } = req.params
      const createdReview: IReview = await reviewService.create(hotelId, reviewData)
      res.json(createdReview)
    } catch (err) {
      console.log(err.message)
      res.status(500).json('Не удалось создать отзыв об отеле')
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const reviews: IReview[] = await reviewService.getAll(hotelId)
      res.json(reviews)
    } catch (err) {
      console.log(err.message)
      res.status(500).json('Не удалось получить отзывы об отеле')
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const { reviewId } = req.params
      const review: IReview = await reviewService.getOne(hotelId, reviewId)
      res.json(review)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось получить отзыв об отеле' })
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const { reviewId } = req.params
      const reviewData = req.body
      const updatedReview: IReview = await reviewService.update(hotelId, reviewId, reviewData)
      res.json(updatedReview)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось обновить отзыв об отеле' })
    }
  }
  async remove(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const { reviewId } = req.params
      await reviewService.remove(hotelId, reviewId)
      res.json({ message: 'Отзыв об отеле удален' })
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось удалить отзыв об отеле' })
    }
  }
}
export default new reviewController()
