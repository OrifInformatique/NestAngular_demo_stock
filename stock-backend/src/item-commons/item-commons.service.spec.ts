import { Test, TestingModule } from '@nestjs/testing';
import { ItemCommonsService } from './item-commons.service';

describe('ItemCommonsService', () => {
  let service: ItemCommonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemCommonsService],
    }).compile();

    service = module.get<ItemCommonsService>(ItemCommonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
