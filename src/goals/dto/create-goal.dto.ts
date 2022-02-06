export class CreateGoalDto {
  readonly name: string
  readonly description?: string
  readonly amount: number
  readonly icon?: string
  readonly color?: string
  readonly user_id: number
}
