import { Module } from '@nestjs/common';
import { ItemConditionsService } from './item-conditions.service';
import { ItemConditionsController } from './item-conditions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemConditionEntity } from './entities/item-condition.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemConditionEntity])
  ],
  controllers: [ItemConditionsController],
  providers: [ItemConditionsService],
})
export class ItemConditionsModule {}
