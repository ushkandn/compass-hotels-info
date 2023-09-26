import handleValidationErrors from '../utils/handleValidationErrors.js'
import { Router } from 'express'
import roomController from '../controllers/roomController.js'

const roomRouter = Router()

roomRouter.post('/:hotelId/room', handleValidationErrors, roomController.create)
roomRouter.get('/:hotelId/room', handleValidationErrors, roomController.getAll)
roomRouter.get('/:hotelId/room/:roomId', handleValidationErrors, roomController.getOne)
roomRouter.patch('/:hotelId/room/:roomId', handleValidationErrors, roomController.update)
roomRouter.delete('/:hotelId/room/:roomId', handleValidationErrors, roomController.remove)

export default roomRouter
