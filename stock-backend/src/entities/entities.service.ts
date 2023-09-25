import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityEntity } from './entities/entity.entity';
import { FindOperator, IsNull, MoreThanOrEqual, Not, Repository } from 'typeorm';

@Injectable()
export class EntitiesService {
  constructor(
    @InjectRepository(EntityEntity)
    private readonly entityRepository: Repository<EntityEntity>
  ) {}

  findAll(archived: boolean) {
    let condition: any = {};

    if (!archived) {
      condition = {
        archive: IsNull()
      }
    }

    return this.entityRepository.find({
      where: condition
    });
  }
}
