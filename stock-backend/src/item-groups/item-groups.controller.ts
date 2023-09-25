import { Controller, Get, Param } from '@nestjs/common';
import { ItemGroupsService } from './item-groups.service';
import { ItemGroupEntity } from './entities/item-group.entity';

@Controller('item-groups')
export class ItemGroupsController {
  constructor(private readonly itemGroupsService: ItemGroupsService) {}

  @Get(':entityId/entity')
  findByEntityId(@Param('entityId') entityId: number): Promise<ItemGroupEntity[]> {
    return this.itemGroupsService.findByEntityId(entityId);
  }
}
