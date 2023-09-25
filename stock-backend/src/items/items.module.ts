import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemCommonsModule } from '../item-commons/item-commons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './entites/item.entity';
import { ItemConditionsModule } from 'src/item-conditions/item-conditions.module';
import { StockingPlacesModule } from 'src/stocking-places/stocking-places.module';
import { SuppliersModule } from 'src/suppliers/suppliers.module';
import { LoansModule } from 'src/loans/loans.module';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity]), 
    ItemCommonsModule, 
    ItemConditionsModule,
    StockingPlacesModule,
    SuppliersModule,
    LoansModule
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
