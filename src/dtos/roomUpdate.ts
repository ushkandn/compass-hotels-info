export class updateRoomDto {
  constructor(
    readonly photos?: string[],
    readonly description?: string,
  ) {}
}
