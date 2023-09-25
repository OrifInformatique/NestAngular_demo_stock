import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemCommonEntity } from './entities/item-common.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemCommonsService {
  constructor(
    @InjectRepository(ItemCommonEntity)
    private readonly itemCommonRepository: Repository<ItemCommonEntity>,
  ) {}

  async findById(id: number): Promise<ItemCommonEntity> {
    const itemCommon = await this.itemCommonRepository.findOne({
      relations: [
        'item_group',
        'items',
        'items.stocking_place',
        'items.supplier',
        'items.item_condition',
        'items.loans',
        'item_tag_links',
        'item_tag_links.item_tag',
        'item_group.entity',
      ],
      where: {
        item_common_id: id,
      },
    });

    if (!itemCommon)
      throw new NotFoundException('item-common not found');

    itemCommon.items.forEach((item, index) => {
      itemCommon.items[index].current_loan = item.getCurrentLoan();
    });
    
    return itemCommon;
  }
}
