import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type OperationTypeDocument = OperationType & Document

@Schema()
export class OperationType {
  @Prop({ required: true })
  name: string
}

export const OperationTypeSchema = SchemaFactory.createForClass(OperationType)

