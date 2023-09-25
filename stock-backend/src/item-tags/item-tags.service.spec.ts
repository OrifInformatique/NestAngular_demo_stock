import { Test, TestingModule } from '@nestjs/testing';
import { ItemTagsService } from './item-tags.service';

describe('ItemTagsService', () => {
  let service: ItemTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemTagsService],
    }).compile();

    service = module.get<ItemTagsService>(ItemTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
