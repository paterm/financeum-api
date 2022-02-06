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

import { OperationType } from './schemas/operation-type.schema'

import { OperationTypesService } from './operation-types.service'

import { CreateOperationTypeDto } from './dto/create-operation-type.dto'
import { UpdateOperationTypeDto } from './dto/update-operation-type.dto'


@Controller('operation-types')
export class OperationTypesController {
  constructor(private readonly service: OperationTypesService) {
  }

  @Get()
  getAll(): Promise<OperationType[]> {
    return this.service.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<OperationType> {
    return this.service.getOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateOperationTypeDto): Promise<OperationType> {
    return this.service.create(payload)
  }

  @Put(':id')
  update(@Body() payload: UpdateOperationTypeDto, @Param('id') id: string): Promise<OperationType> {
    return this.service.update(id, payload)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<OperationType> {
    return this.service.remove(id)
  }
}
