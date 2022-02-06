import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Bank {
  @Prop()
  name: string

  @Prop()
  icon: string

  @Prop()
  description: string
}

export const BankSchema = SchemaFactory.createForClass(Bank)

export type BankDocument = Bank & Document
