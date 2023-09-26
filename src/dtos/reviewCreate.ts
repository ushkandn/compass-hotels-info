export class createReviewDto {
  constructor(
    readonly clientId: number,
    readonly mark: number,
    readonly comment: string,
  ) {}
}
