import hotelModel from '../models/hotelModel.js'
import { createHotelDto } from '../dtos/hotelCreate.js'
import { updateHotelDto } from '../dtos/hotelUpdate.js'

class hotelService {
  async create(hotel: createHotelDto) {
    return await hotelModel.create(hotel)
  }

  async getOne(hotelId: string) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    return await hotelModel.findById(hotelId)
  }

  async getAll() {
    return await hotelModel.find()
  }

  async update(hotelId: string, hotel: updateHotelDto) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    return await hotelModel.findByIdAndUpdate(hotelId, hotel, { new: true })
  }

  async remove(hotelId: string) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    await hotelModel.findByIdAndDelete(hotelId)
  }
}

export default new hotelService()
