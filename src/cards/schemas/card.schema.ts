import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Bank } from '../../banks/schemas/bank.schema'
import { Document } from 'mongoose'
import { User } from '../../users/schemas/user.schema'

const { Schema: { Types: { ObjectId } } } = mongoose

@Schema()
export class Card {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  number: number

  @Prop({ default: 0 })
  amount: number

  @Prop({ default: false })
  is_credit: boolean

  @Prop({ default: 0 })
  credit_limit: number

  @Prop({ type: ObjectId, ref: 'Bank' })
  bank_id: Bank

  @Prop({ type: ObjectId, ref: 'User', required: true })
  user_id: User
}

export const CardSchema = SchemaFactory.createForClass(Card)

export type CardDocument = Card & Document
