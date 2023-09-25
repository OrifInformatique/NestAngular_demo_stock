import { Test, TestingModule } from '@nestjs/testing';
import { ItemConditionsService } from './item-conditions.service';

describe('ItemConditionsService', () => {
  let service: ItemConditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemConditionsService],
    }).compile();

    service = module.get<ItemConditionsService>(ItemConditionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
