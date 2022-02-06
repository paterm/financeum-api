import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Card, CardDocument } from './schemas/card.schema'

import { CreateCardDto } from './dto/create-card.dto'
import { UpdateCardDto } from './dto/update-card.dto'


@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private model: Model<CardDocument>) {
  }

  async getAll(): Promise<Card[]> {
    return this.model.find().exec()
  }

  async getOne(id: string): Promise<Card> {
    return this.model.findById(id).exec()
  }

  async create(payload: CreateCardDto): Promise<Card> {
    const newEntity = new this.model(payload)
    return newEntity.save()
  }

  async remove(id: string): Promise<Card> {
    return this.model.findByIdAndRemove(id)
  }

  async update(id: string, payload: UpdateCardDto): Promise<Card> {
    return this.model.findByIdAndUpdate(id, payload, { new: true })
  }
}
