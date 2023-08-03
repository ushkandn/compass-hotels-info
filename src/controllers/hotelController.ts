import { Request, Response } from 'express'
import { Hotel } from '../interfaces/hotelInterface.js'
import hotelService from '../services/hotelService.js'

class hotelController {
  async create(req: Request, res: Response) {
    try {
      const hotel = await hotelService.create(req.body)
      res.json(hotel)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось создать информацию об отеле' })
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const hotel: Hotel = await hotelService.getOne(hotelId)

      res.json(hotel)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалалось получить информацию об отеле' })
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const hotels: Hotel[] = await hotelService.getAll()
      res.json(hotels)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось получить информацию об отелях' })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const updatedHotel: Hotel = await hotelService.update(hotelId, req.body)
      return res.json(updatedHotel)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: 'Не удалось обновить информацию об отеле' })
    }
  }

  async remove(req: Request, res: Response) {
    try {
      const { hotelId } = req.params
      const deletedHotel: Hotel = await hotelService.remove(hotelId)
      return res.json(deletedHotel)
    } catch (err) {
      console.log(err.message)
      res.status(500).json({
        message: 'Не удалось удалить информацию об отеле',
      })
    }
  }
}

export default new hotelController()
