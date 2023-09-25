import { Injectable } from '@nestjs/common';
import { IsNull, Not, Repository } from 'typeorm';
import { ItemTagEntity } from './entities/item-tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemTagsService {
  constructor(
    @InjectRepository(ItemTagEntity)
    private itemTagsRepository: Repository<ItemTagEntity>
  ) {}

  async findAll(): Promise<ItemTagEntity[]> {
    return await this.itemTagsRepository.find({
      where: {
        archive: IsNull()
      }
    });
  }
}
