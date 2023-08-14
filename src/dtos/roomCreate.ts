export class createRoomDto {
  constructor(
    readonly number: string,
    readonly photos: string[],
    readonly description: string,
  ) {}
}
