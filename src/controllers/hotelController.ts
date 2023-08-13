import { Request, Response } from 'express'
import { IHotel } from '../interfaces/hotelInterface.js'
import hotelService from '../services/hotelService.js'

class hotelController {
  async create(req: Request, res: Response) {
    try {
      const hotelData = req.body
      const hotel: IHotel = await hotelService.create(hotelData)
      res.json(hotel)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось создать информацию об отеле' })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const hotel: IHotel = await hotelService.getOne(hotelId)
      res.json(hotel)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалалось получить информацию об отеле' })
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const hotels: IHotel[] = await hotelService.getAll()
      res.json(hotels)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось получить информацию об отелях' })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const hotelData = req.body
      const updatedHotel: IHotel = await hotelService.update(hotelId, hotelData)
      res.json(updatedHotel)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось обновить информацию об отеле' })
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      await hotelService.remove(hotelId)
      res.json({ message: 'Информация об отеле удалена' })
    } catch (err) {
      console.log(err.message)
      res.status(500).json({
        message: 'Не удалось удалить информацию об отеле',
      })
    }
  }
}

export default new hotelController()
