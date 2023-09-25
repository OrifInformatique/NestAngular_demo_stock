import { Module } from '@nestjs/common';
import { ItemGroupsService } from './item-groups.service';
import { ItemGroupsController } from './item-groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemGroupEntity } from './entities/item-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemGroupEntity])],
  controllers: [ItemGroupsController],
  providers: [ItemGroupsService],
})
export class ItemGroupsModule {}
