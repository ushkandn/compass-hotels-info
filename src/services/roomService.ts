import { createRoomDto } from '../dtos/roomCreate.js'
import { updateRoomDto } from '../dtos/roomUpdate.js'
import hotelModel from '../models/hotelModel.js'
import { IHotel } from '../interfaces/hotelInterface.js'
import { IRoom } from '../interfaces/roomInterface.js'

class roomService {
  async create(hotelId: string, room: createRoomDto) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    const hotel = await hotelModel.findById(hotelId)
    hotel.rooms.push(room)
    await hotel.save()
    return room
  }

  async getAll(hotelId: string) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    const hotel: IHotel = await hotelModel.findById(hotelId)
    return hotel.rooms
  }

  async getOne(hotelId: string, roomId: string) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    if (!roomId) {
      throw new Error('Такой отзыв не найден')
    }
    const hotel: IHotel = await hotelModel.findById(hotelId)

    const room: IRoom = hotel.rooms.find((room) => room._id.toString() === roomId)

    return room
  }

  async update(hotelId: string, roomId: string, updatedRoom: updateRoomDto) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    if (!roomId) {
      throw new Error('Такой отзыв не найден')
    }

    const hotel = await hotelModel.findById(hotelId)

    const roomIndex = hotel.rooms.findIndex((room) => room._id.toString() === roomId)

    hotel.rooms[roomIndex].photos = updatedRoom.photos
    hotel.rooms[roomIndex].description = updatedRoom.description

    await hotel.save()

    return hotel.rooms[roomIndex]
  }

  async remove(hotelId: string, roomId: string) {
    if (!hotelId) {
      throw new Error('Такой отель не найден')
    }
    if (!roomId) {
      throw new Error('Такой отзыв не найден')
    }

    const hotel = await hotelModel.findById(hotelId)

    const roomIndex = hotel.rooms.findIndex((room) => room._id.toString() === roomId)
    hotel.rooms.splice(roomIndex, 1)
    await hotel.save()
  }
}

export default new roomService()
