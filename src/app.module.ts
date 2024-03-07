import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TransactionType } from './transactionType/transactionType.entity';
import { TransactionOrigin } from './transactionOrigin/transactionOrigin.entity';
import { PeriodType } from './periodType/periodType.entity';
import { Category } from './category/category.entity';
import { Item } from './item/item.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DABATASE,
      synchronize: false,
      logging: true,
      entities: [
        TransactionType,
        TransactionOrigin,
        PeriodType,
        Category,
        Item,
      ],
      subscribers: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
