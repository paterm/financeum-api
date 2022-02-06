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

import { UsersService } from './users.service'

import { User } from './schemas/user.schema'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'


@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {
  }

  @Get()
  getAll(): Promise<User[]> {
    return this.service.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.service.getOne(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateUserDto): Promise<User> {
    return this.service.create(payload)
  }

  @Put(':id')
  update(@Body() payload: UpdateUserDto, @Param('id') id: string): Promise<User> {
    return this.service.update(id, payload)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.service.remove(id)
  }
}
