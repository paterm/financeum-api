import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Operation, OperationDocument } from './schemas/operatiion.schema'

import { CreateOperationSto } from './dto/create-operation.sto'
import { UpdateOperationDto } from './dto/update-operation.dto'


@Injectable()
export class OperationsService {
  constructor(@InjectModel(Operation.name) private model: Model<OperationDocument>) {
  }

  async getAll(): Promise<Operation[]> {
    return this.model.find().exec()
  }

  async getOne(id: string): Promise<Operation> {
    return this.model.findById(id).exec()
  }

  async create(payload: CreateOperationSto): Promise<Operation> {
    const newEntity = new this.model(payload)
    return newEntity.save()
  }

  async update(id: string, payload: UpdateOperationDto): Promise<Operation> {
    return this.model.findByIdAndUpdate(id, payload, { new: true })
  }

  async remove(id: string): Promise<Operation> {
    return this.model.findByIdAndRemove(id)
  }
}
