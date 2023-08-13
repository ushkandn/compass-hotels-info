import { Request, Response } from 'express'
import { IRoom } from '../interfaces/roomInterface.js'
import roomService from '../services/roomService.js'
import { updateRoomDto } from '../dtos/roomUpdate.js'

class roomController {
  async create(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const roomData = req.body
      const createdRoom = await roomService.create(hotelId, roomData)
      res.json(createdRoom)
    } catch (err) {
      console.log(err.message)
      res.status(500).json('Не удалось создать информацию о комнате отеля')
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const rooms: IRoom[] = await roomService.getAll(hotelId)
      res.json(rooms)
    } catch (err) {
      console.log(err.message)
      res.status(500).json('Не удалось получить информацию о комнатах отеля')
    }
  }
  async getOne(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const { roomId } = req.params
      const room = await roomService.getOne(hotelId, roomId)
      res.json(room)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось получить информацию о комнате отеля' })
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const { roomId } = req.params
      const roomData = req.body
      const updatedRoom:IRoom = await roomService.update(hotelId, roomId, roomData)
      res.json(updatedRoom)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось обновить информацию о комнате отеля' })
    }
  }
  async remove(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const { roomId } = req.params
      await roomService.remove(hotelId, roomId)
      res.json({ message: 'Информация о комнате отеля удалена' })
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось удалить информацию о комнате отеля' })
    }
  }
}
export default new roomController()
