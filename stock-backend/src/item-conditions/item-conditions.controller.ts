import { Controller } from '@nestjs/common';
import { ItemConditionsService } from './item-conditions.service';

@Controller('item-conditions')
export class ItemConditionsController {
  constructor(private readonly itemConditionsService: ItemConditionsService) {}
}
