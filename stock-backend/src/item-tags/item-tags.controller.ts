import { Controller, Get } from '@nestjs/common';
import { ItemTagsService } from './item-tags.service';
import { ItemTagEntity } from './entities/item-tag.entity';

@Controller('item-tags')
export class ItemTagsController {
  constructor(private readonly itemTagsService: ItemTagsService) {}
  @Get()
  findAll(): Promise<ItemTagEntity[]> {
    return this.itemTagsService.findAll();
  }
}
