import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { OperationType } from '../../operation-types/schemas/operation-type.schema'
import { Card } from '../../cards/schemas/card.schema'
import { Category } from '../../categories/schemas/category.schema'

const { Schema: { Types: { ObjectId } } } = mongoose


@Schema()
export class Operation {
  @Prop({ required: true })
  value: number

  @Prop({ type: ObjectId, ref: 'OperationType', required: true })
  operation_type_id: OperationType

  @Prop({ type: ObjectId, ref: 'Category', required: true })
  category_id: Category

  @Prop({ type: ObjectId, ref: 'Card', required: true })
  card_id: Card
}

export const OperationSchema = SchemaFactory.createForClass(Operation)

export type OperationDocument = Operation & Document
