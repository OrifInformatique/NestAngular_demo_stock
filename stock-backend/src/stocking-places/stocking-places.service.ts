import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockingPlaceEntity } from './entities/stocking-place.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class StockingPlacesService {
  constructor(
    @InjectRepository(StockingPlaceEntity)
    private readonly stockingPlaceRepository: Repository<StockingPlaceEntity>,
  ) {}

  async findByEntityId(entityId: number): Promise<StockingPlaceEntity[]> {
    return await this.stockingPlaceRepository.find({
      where: {
        fk_entity_id: entityId,
        archive: IsNull()
      }
    });
  }
}
