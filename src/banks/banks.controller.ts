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

import { BanksService } from './banks.service'

import { Bank } from './schemas/bank.schema'

import { CreateBankDto } from './dto/create-bank.dto'
import { UpdateBankDto } from './dto/update-bank.dto'


@Controller('banks')
export class BanksController {
  constructor(private readonly service: BanksService) {
  }

  @Get()
  getAll(): Promise<Bank[]> {
    return this.service.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Bank> {
    return this.service.getOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateBankDto): Promise<Bank> {
    return this.service.create(payload)
  }

  @Put(':id')
  update(@Body() payload: UpdateBankDto, @Param('id') id: string): Promise<Bank> {
    return this.service.update(id, payload)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Bank> {
    return this.service.remove(id)
  }
}
