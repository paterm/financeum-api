import 'dotenv/config'

import { Module } from '@nestjs/common'

import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { OperationsModule } from './operations/operations.module'
import { OperationTypesModule } from './operation-types/operation-types.module'
import { GoalsModule } from './goals/goals.module'
import { CategoriesModule } from './categories/categories.module'
import { CardsModule } from './cards/cards.module'
import { BanksModule } from './banks/banks.module'


@Module({
  imports: [
    UsersModule,
    OperationsModule,
    OperationTypesModule,
    GoalsModule,
    CategoriesModule,
    CardsModule,
    BanksModule,
    MongooseModule.forRoot(process.env.DB_CONNECT_URL),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
