import { createReviewDto } from '../dtos/reviewCreate.js'
import { updateReviewDto } from '../dtos/reviewUpdate.js'
import hotelModel from '../models/hotelModel.js'
import { IHotel } from '../interfaces/hotelInterface.js'
import { IReview } from '../interfaces/reviewInterface.js'
class reviewService {

  async create(hotelId: string, review: createReviewDto) {

    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }

    const hotel = await hotelModel.findById(hotelId)
    hotel.reviews.push(review)
    await hotel.save()

    return review
  }

  async getAll(hotelId: string) {

    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }

    const hotel: IHotel = await hotelModel.findById(hotelId)

    return hotel.reviews
  }

  async getOne(hotelId: string, reviewId: string) {

    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }

    if (!reviewId) {
      throw new Error('Такой отзыв не найден')
    }

    const hotel: IHotel = await hotelModel.findById(hotelId)
    const review: IReview = hotel.reviews.find((review) => review._id.toString() === reviewId)

    return review
  }

  async update(hotelId: string, reviewId: string, updatedReview: updateReviewDto) {

    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }

    if (!reviewId) {
      throw new Error('Такой отзыв не найден')
    }

    const hotel = await hotelModel.findById(hotelId)
    const reviewIndex = hotel.reviews.findIndex((review) => review._id.toString() === reviewId)
    hotel.reviews[reviewIndex].mark = updatedReview.mark
    hotel.reviews[reviewIndex].comment = updatedReview.comment
    await hotel.save()

    return hotel.reviews[reviewIndex]
  }

  async remove(hotelId: string, reviewId: string) {

    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }

    if (!reviewId) {
      throw new Error('Такой отзыв не найден')
    }
    const hotel = await hotelModel.findById(hotelId)
    const reviewIndex = hotel.reviews.findIndex((review) => review._id.toString() === reviewId)
    hotel.reviews.splice(reviewIndex, 1)
    
    await hotel.save()
  }

}

export default new reviewService()
