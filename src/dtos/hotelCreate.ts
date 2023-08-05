export class createHotelDto {
  constructor(
    readonly name: string,
    readonly location: string,
    readonly gallery: string[],
    readonly description: string,
    readonly phone: string,
  ) {}
}
