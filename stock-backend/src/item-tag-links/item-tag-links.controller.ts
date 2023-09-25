import { Controller } from '@nestjs/common';
import { ItemTagLinksService } from './item-tag-links.service';

@Controller('item-tag-links')
export class ItemTagLinksController {
  constructor(private readonly itemTagLinksService: ItemTagLinksService) {}
}
