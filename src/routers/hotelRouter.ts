import { Router } from 'express'
import handleValidationErrors from '../utils/handleValidationErrors.js'
import hotelController from '../controllers/hotelController.js'

const hotelRouter = Router()

hotelRouter.post('/', handleValidationErrors, hotelController.create)
hotelRouter.get('/:hotelId', handleValidationErrors, hotelController.getOne)
hotelRouter.get('/', handleValidationErrors, hotelController.getAll)
hotelRouter.patch('/:hotelId', handleValidationErrors, hotelController.update)
hotelRouter.delete('/:hotelId', handleValidationErrors, hotelController.remove)

export default hotelRouter
