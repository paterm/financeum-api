import { Module } from '@nestjs/common'
import { OperationsService } from './operations.service'
import { OperationsController } from './operations.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Operation, OperationSchema } from './schemas/operatiion.schema'

@Module({
  providers: [OperationsService],
  controllers: [OperationsController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Operation.name,
        schema: OperationSchema,
      }
    ])
  ]
})
export class OperationsModule {}
