import { Module } from '@nestjs/common';
import { StockingPlacesService } from './stocking-places.service';
import { StockingPlacesController } from './stocking-places.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockingPlaceEntity } from './entities/stocking-place.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StockingPlaceEntity])
  ],
  controllers: [StockingPlacesController],
  providers: [StockingPlacesService],
})
export class StockingPlacesModule {}
