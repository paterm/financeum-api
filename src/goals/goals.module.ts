import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { GoalsService } from './goals.service'
import { GoalsController } from './goals.controller'
import { Goal, GoalSchema } from './schemas/goal.schema'


@Module({
  providers: [GoalsService],
  controllers: [GoalsController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Goal.name,
        schema: GoalSchema,
      },
    ])
  ]
})
export class GoalsModule {}
