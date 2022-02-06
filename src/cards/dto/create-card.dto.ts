export class CreateCardDto {
  readonly name: string
  readonly number: number
  readonly bank_id?: number
  readonly amount?: number = 0
  readonly is_credit?: boolean
  readonly credit_limit?: number
  readonly user_id: number
}
