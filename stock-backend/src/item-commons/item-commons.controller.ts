import { Controller, Get, Param } from '@nestjs/common';
import { ItemCommonsService } from './item-commons.service';
import { ItemCommonEntity } from './entities/item-common.entity';

@Controller('item-commons')
export class ItemCommonsController {
  constructor(private readonly itemCommonsService: ItemCommonsService) {}

  @Get(':id')
  findById(@Param('id') id: number): Promise<ItemCommonEntity> {
    return this.itemCommonsService.findById(id);
  }
}
