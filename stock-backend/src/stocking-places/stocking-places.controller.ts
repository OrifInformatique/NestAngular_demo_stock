import { Controller, Get, Param } from '@nestjs/common';
import { StockingPlacesService } from './stocking-places.service';
import { StockingPlaceEntity } from './entities/stocking-place.entity';

@Controller('stocking-places')
export class StockingPlacesController {
  constructor(private readonly stockingPlacesService: StockingPlacesService) {}
  
  @Get(':entityId/entity')
  findByEntityId(@Param('entityId') entityId: number): Promise<StockingPlaceEntity[]> {
    return this.stockingPlacesService.findByEntityId(entityId);
  }
}
