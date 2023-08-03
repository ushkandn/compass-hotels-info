import { Router } from 'express'
import handleValidationErrors from '../utils/handleValidationErrors.js'
import hotelController from '../controllers/hotelController.js'

const hotelRouter = Router()

hotelRouter.post('/hotels', handleValidationErrors, hotelController.create)
hotelRouter.get('/hotels/:hotelId', handleValidationErrors, hotelController.getOne)
hotelRouter.get('/hotels', handleValidationErrors, hotelController.getAll)
hotelRouter.patch('/hotels/:hotelId', handleValidationErrors, hotelController.update)
hotelRouter.delete('/hotels/:hotelId', handleValidationErrors, hotelController.remove)

export default hotelRouter
