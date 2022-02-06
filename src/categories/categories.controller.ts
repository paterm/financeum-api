import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common'

import { CategoriesService } from './categories.service'

import { Category } from './schemas/category.schema'

import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'


@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {
  }

  @Get()
  getAll(): Promise<Category[]> {
    return this.service.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Category> {
    return this.service.getOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateCategoryDto): Promise<Category> {
    return this.service.create(payload)
  }

  @Put(':id')
  update(@Body() payload: UpdateCategoryDto, @Param('id') id: string): Promise<Category> {
    return this.service.update(id, payload)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Category> {
    return this.service.remove(id)
  }
}
