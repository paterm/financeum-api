import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CardsService } from './cards.service'
import { CardsController } from './cards.controller'
import { Card, CardSchema } from './schemas/card.schema'


@Module({
  providers: [CardsService],
  controllers: [CardsController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Card.name,
        schema: CardSchema,
      },
    ])
  ]
})
export class CardsModule {}
