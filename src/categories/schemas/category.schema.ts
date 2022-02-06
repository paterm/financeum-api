import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Category {
  @Prop({ required: true })
  name: string

  @Prop()
  color: string

  @Prop()
  icon: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)

export type CategoryDocument = Category & Document
