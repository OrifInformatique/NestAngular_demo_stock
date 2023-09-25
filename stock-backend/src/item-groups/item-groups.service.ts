import { Injectable } from '@nestjs/common';
import { IsNull, Repository } from 'typeorm';
import { ItemGroupEntity } from './entities/item-group.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemGroupsService {
  constructor(
    @InjectRepository(ItemGroupEntity)
    private readonly itemGroupsRepository: Repository<ItemGroupEntity>,
  ) {}

  async findByEntityId(entityId: number): Promise<ItemGroupEntity[]> {
    return await this.itemGroupsRepository.find({
      where: {
        fk_entity_id: entityId,
        archive: IsNull()
      }
    });
  }
}
