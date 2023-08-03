import { Router } from 'express'
import handleValidationErrors from '../utils/handleValidationErrors.js'
import reviewController from '../controllers/reviewController.js'

const reviewRouter = Router()

reviewRouter.post('/hotels/:hotelId/review/', handleValidationErrors, reviewController.create)
//reviewRouter.get('/hotels/:hotelId/review/:reviewId', handleValidationErrors, reviewController.create)
//reviewRouter.get('/hotels/:hotelId/review/', handleValidationErrors, reviewController.create)
//reviewRouter.delete('/hotels/:hotelId/review/:reviewId', handleValidationErrors, reviewController.create)

export default reviewRouter
