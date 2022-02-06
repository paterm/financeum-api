import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { User } from '../../users/schemas/user.schema'
import * as mongoose from 'mongoose'

const { Schema: { Types: { ObjectId } } } = mongoose


@Schema()
export class Goal {
  @Prop({ required: true })
  name: string

  @Prop({ required: true, default: 0 })
  amount: number

  @Prop()
  icon: string

  @Prop()
  color: string

  @Prop()
  description: string

  @Prop({ type: ObjectId, ref: 'User', required: true })
  user_id: User
}

export const GoalSchema = SchemaFactory.createForClass(Goal)

export type GoalDocument = Goal & Document
