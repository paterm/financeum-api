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

import { GoalsService } from './goals.service'

import { Goal } from './schemas/goal.schema'

import { CreateGoalDto } from './dto/create-goal.dto'
import { UpdateGoalDto } from './dto/update-goal.dto'


@Controller('goals')
export class GoalsController {
  constructor(private readonly service: GoalsService) {
  }

  @Get()
  getAll(): Promise<Goal[]> {
    return this.service.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Goal> {
    return this.service.getOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateGoalDto): Promise<Goal> {
    return this.service.create(payload)
  }

  @Put(':id')
  update(@Body() payload: UpdateGoalDto, @Param('id') id: string): Promise<Goal> {
    return this.service.update(id, payload)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Goal> {
    return this.service.remove(id)
  }
}
