import { Module } from '@nestjs/common';
import { ItemCommonsService } from './item-commons.service';
import { ItemCommonsController } from './item-commons.controller';
import { ItemGroupsModule } from '../item-groups/item-groups.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemCommonEntity } from './entities/item-common.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemCommonEntity]), ItemGroupsModule],
  controllers: [ItemCommonsController],
  providers: [ItemCommonsService],
})
export class ItemCommonsModule {}
