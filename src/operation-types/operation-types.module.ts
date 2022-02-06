import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { OperationTypesService } from './operation-types.service'
import { OperationTypesController } from './operation-types.controller'
import { OperationType, OperationTypeSchema } from './schemas/operation-type.schema'

@Module({
  providers: [OperationTypesService],
  controllers: [OperationTypesController],
  imports: [
    MongooseModule.forFeature([
      {
        name: OperationType.name,
        schema: OperationTypeSchema,
      },
    ])
  ]
})
export class OperationTypesModule {}
