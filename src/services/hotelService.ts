import hotelModel from '../models/hotelModel.js'
import { Hotel } from '../interfaces/hotelInterface.js'

class hotelService {
  async create(hotel: Hotel) {
    const createdHotel = await hotelModel.create(hotel)
    return createdHotel
  }

  async getOne(hotelId: String) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    const findHotelByID = await hotelModel.findById(hotelId).exec()
    return findHotelByID
  }

  async getAll() {
    const hotels = await hotelModel.find().exec()
    return hotels
  }

  async update(hotelId: String, hotel: Hotel) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    const updatedHotel = await hotelModel.findByIdAndUpdate(hotelId, hotel, { new: true })
    return updatedHotel
  }

  async remove(hotelId: String) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    const deletedHotel = await hotelModel.findByIdAndDelete(hotelId)
    return deletedHotel
  }
}

export default new hotelService()
