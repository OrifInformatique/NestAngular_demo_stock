import { Test, TestingModule } from '@nestjs/testing';
import { ItemTagLinksService } from './item-tag-links.service';

describe('ItemTagLinksService', () => {
  let service: ItemTagLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemTagLinksService],
    }).compile();

    service = module.get<ItemTagLinksService>(ItemTagLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
