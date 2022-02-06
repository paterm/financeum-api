import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { OperationType, OperationTypeDocument } from './schemas/operation-type.schema'

import { CreateOperationTypeDto } from './dto/create-operation-type.dto'
import { UpdateOperationTypeDto } from './dto/update-operation-type.dto'


@Injectable()
export class OperationTypesService {
  constructor(@InjectModel(OperationType.name) private model: Model<OperationTypeDocument>) {
  }

  async getAll(): Promise<OperationType[]> {
    return this.model.find().exec()
  }

  async getOne(id: string): Promise<OperationType> {
    return this.model.findById(id).exec()
  }

  async create(payload: CreateOperationTypeDto): Promise<OperationType> {
    const newEntity = new this.model(payload)
    return newEntity.save()
  }

  async update(id: string, payload: UpdateOperationTypeDto): Promise<OperationType> {
    return this.model.findByIdAndUpdate(id, payload, { new: true })
  }

  async remove(id: string): Promise<OperationType> {
    return this.model.findByIdAndRemove(id)
  }
}
