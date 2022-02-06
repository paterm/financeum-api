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

import { OperationsService } from './operations.service'

import { Operation } from './schemas/operatiion.schema'

import { CreateOperationSto } from './dto/create-operation.sto'
import { UpdateOperationDto } from './dto/update-operation.dto'


@Controller('operations')
export class OperationsController {
  constructor(private readonly service: OperationsService) {
  }

  @Get()
  getAll(): Promise<Operation[]> {
    return this.service.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Operation> {
    return this.service.getOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateOperationSto): Promise<Operation> {
    return this.service.create(payload)
  }

  @Put(':id')
  update(@Body() payload: UpdateOperationDto, @Param('id') id: string): Promise<Operation> {
    return this.service.update(id, payload)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Operation> {
    return this.service.remove(id)
  }
}
