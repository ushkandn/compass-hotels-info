export class updateHotelDto {
  constructor(
    readonly hotelId: string,
    readonly name?: string,
    readonly location?: string,
    readonly gallery?: string[],
    readonly description?: string,
    readonly phone?: string,
  ) {}
}
