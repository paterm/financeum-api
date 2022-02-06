import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { User, UserDocument } from './schemas/user.schema'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {
  }

  async getAll(): Promise<User[]> {
    return this.model.find().exec()
  }

  async getOne(id: string): Promise<User> {
    return this.model.findById(id).exec()
  }

  async create(payload: CreateUserDto): Promise<User> {
    const newEntity = new this.model(payload)
    return newEntity.save()
  }

  async update(id: string, payload: UpdateUserDto): Promise<User> {
    return this.model.findByIdAndUpdate(id, payload, { new: true })
  }

  async remove(id: string): Promise<User> {
    return this.model.findByIdAndRemove(id)
  }
}
