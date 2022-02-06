import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Goal, GoalDocument } from './schemas/goal.schema'

import { CreateGoalDto } from './dto/create-goal.dto'
import { UpdateGoalDto } from './dto/update-goal.dto'


@Injectable()
export class GoalsService {
  constructor(@InjectModel(Goal.name) private model: Model<GoalDocument>) {
  }

  async getAll(): Promise<Goal[]> {
    return this.model.find().exec()
  }

  async getOne(id: string): Promise<Goal> {
    return this.model.findById(id).exec()
  }

  async create(payload: CreateGoalDto): Promise<Goal> {
    const newEntity = new this.model(payload)
    return newEntity.save()
  }

  async update(id: string, payload: UpdateGoalDto): Promise<Goal> {
    return this.model.findByIdAndUpdate(id, payload, { new: true })
  }

  async remove(id: string): Promise<Goal> {
    return this.model.findByIdAndRemove(id)
  }
}
