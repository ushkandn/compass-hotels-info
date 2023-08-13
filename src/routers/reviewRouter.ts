import { Router } from 'express'
import handleValidationErrors from '../utils/handleValidationErrors.js'
import reviewController from '../controllers/reviewController.js'

const reviewRouter = Router()

reviewRouter.post('/:hotelId/review', handleValidationErrors, reviewController.create)
reviewRouter.get('/:hotelId/review', handleValidationErrors, reviewController.getAll)
reviewRouter.get('/:hotelId/review/:reviewId', handleValidationErrors, reviewController.getOne)
reviewRouter.patch('/:hotelId/review/:reviewId', handleValidationErrors, reviewController.update)
reviewRouter.delete('/:hotelId/review/:reviewId', handleValidationErrors, reviewController.remove)
export default reviewRouter
