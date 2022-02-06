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

import { CardsService } from './cards.service'

import { Card } from './schemas/card.schema'

import { CreateCardDto } from './dto/create-card.dto'
import { UpdateCardDto } from './dto/update-card.dto'


@Controller('cards')
export class CardsController {
  constructor(private readonly service: CardsService) {
  }

  @Get()
  getAll(): Promise<Card[]> {
    return this.service.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Card> {
    return this.service.getOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateCardDto): Promise<Card> {
    return this.service.create(payload)
  }

  @Put(':id')
  update(@Body() payload: UpdateCardDto, @Param('id') id: string): Promise<Card> {
    return this.service.update(id, payload)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Card> {
    return this.service.remove(id)
  }
}
