import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Category, CategoryDocument } from './schemas/category.schema'

import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'


@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private model: Model<CategoryDocument>) {
  }

  async getAll(): Promise<Category[]> {
    return this.model.find().exec()
  }

  async getOne(id: string): Promise<Category> {
    return this.model.findById(id).exec()
  }

  async create(payload: CreateCategoryDto): Promise<Category> {
    const newEntity = new this.model(payload)
    return newEntity.save()
  }

  async update(id: string, payload: UpdateCategoryDto): Promise<Category> {
    return this.model.findByIdAndUpdate(id, payload, { new: true })
  }

  async remove(id: string): Promise<Category> {
    return this.model.findByIdAndRemove(id)
  }
}
