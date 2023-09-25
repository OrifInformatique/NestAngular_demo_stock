import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './entites/item.entity';
import { Repository } from 'typeorm';
import { LoanEntity } from 'src/loans/entities/loan.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
  ) {}

  async findFiltered(
    c: number[],
    o: string,
    ad: string,
    e: number,
    ts?: string,
    t?: number[],
    s?: number[],
    g?: number[],
    page = 1,
  ): Promise<{ items: ItemEntity[]; totalItems: number }> {
    const pageSize = 48; // Total number of items per page
    const queryBuilder = this.itemRepository
      .createQueryBuilder('item')
      .leftJoinAndSelect('item.item_common', 'item_common')
      .leftJoinAndSelect('item.stocking_place', 'stocking_place')
      .leftJoinAndSelect('item.item_condition', 'item_condition')
      .leftJoinAndSelect('item_common.item_group', 'item_group')
      .leftJoin('item_common.item_tag_links', 'item_tag_links')
      .leftJoin('item_tag_links.item_tag', 'item_tag')
      .where('item_group.fk_entity_id = :entityId', { entityId: e })
      .leftJoinAndMapOne(
        'item.current_loan',
        LoanEntity,
        'loan',
        'loan.item_id = item.item_id AND loan.date <= :currentDate AND loan.real_return_date IS NULL',
        { currentDate: new Date() }
    );

    // Item conditions
    if (c && c.length > 0) {
      queryBuilder.andWhere('item.item_condition_id IN (:...conditions)', {
        conditions: c,
      });
    }

    // Text search
    if (ts) {
      let parts = ts.split('.');
      let lastPart = parseInt(parts.at(-1));
      let inventoryNumber = '';
      let whereCondition = '(item_common.description LIKE :ts OR item_common.name LIKE :ts OR item.serial_number LIKE :ts)'

      if (!isNaN(lastPart)) {
        for (let i = 0; i < parts.length - 1; i++) {
          if (i > 0) {
            inventoryNumber += '.';
          }
          inventoryNumber += parts[i];
        }
        
        if (inventoryNumber !== '') {
          whereCondition += ' OR item.item_id = :lastPart AND inventory_prefix LikE :inventoryNumber';
        } else {
          whereCondition += ' OR item.item_id = :lastPart';
        }
      } else {
        whereCondition += ' OR inventory_prefix LIKE :ts'
      }

      queryBuilder.andWhere(
        whereCondition,
        { ts: `%${ts}%`, lastPart: lastPart, inventoryNumber: `%${inventoryNumber}%` },
      );
    }

    // Item tags
    if (t && t.length > 0) {
      queryBuilder.andWhere('item_tag.item_tag_id IN (:...itemTags)', {
        itemTags: t,
      });
    }

    // Stocking places
    if (s && s.length > 0) {
      queryBuilder.andWhere('item.stocking_place_id IN (:...stockingPlaces)', {
        stockingPlaces: s,
      });
    }

    // Item groups
    if (g && g.length > 0) {
      queryBuilder.andWhere('item_group.item_group_id IN (:...groups)', {
        groups: g,
      });
    }

    // Order By
    let orderByField: string;
    switch (o) {
      case '1':
        orderByField = 'item.stocking_place';
        break;
      case '2':
        orderByField = 'item.buying_date';
        break;
      case '3':
        orderByField = 'item.inventory_prefix';
        break;
      default:
        orderByField = 'item_common.name';
    }

    queryBuilder.orderBy(orderByField, ad === '0' ? 'ASC' : 'DESC');

    // Calculate the number of items to skip and take
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    // Query for the items and total count
    const [items, totalItems] = await queryBuilder
      .skip(skip)
      .take(take)
      .getManyAndCount();

    return { items, totalItems };
  }

  async findById(id: number): Promise<ItemEntity> {
    return await this.itemRepository.findOne({
      relations: ['item_common', 'stocking_place', 'item_common.item_group'],
      where: {
        item_id: id,
      },
    });
  }
}
