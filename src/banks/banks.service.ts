import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Bank, BankDocument } from './schemas/bank.schema'

import { CreateBankDto } from './dto/create-bank.dto'
import { UpdateBankDto } from './dto/update-bank.dto'


@Injectable()
export class BanksService {
  constructor(@InjectModel(Bank.name) private model: Model<BankDocument>) {
  }

  async getAll(): Promise<Bank[]> {
    return this.model.find().exec()
  }

  async getOne(id: string): Promise<Bank> {
    return this.model.findById(id).exec()
  }

  async create(payload: CreateBankDto): Promise<Bank> {
    const newEntity = new this.model(payload)
    return newEntity.save()
  }

  async update(id: string, payload: UpdateBankDto): Promise<Bank> {
    return this.model.findByIdAndUpdate(id, payload, { new: true })
  }

  async remove(id: string): Promise<Bank> {
    return this.model.findByIdAndRemove(id)
  }
}
