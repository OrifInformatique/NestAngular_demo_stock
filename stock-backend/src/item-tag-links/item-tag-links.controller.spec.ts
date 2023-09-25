import { Test, TestingModule } from '@nestjs/testing';
import { ItemTagLinksController } from './item-tag-links.controller';
import { ItemTagLinksService } from './item-tag-links.service';

describe('ItemTagLinksController', () => {
  let controller: ItemTagLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemTagLinksController],
      providers: [ItemTagLinksService],
    }).compile();

    controller = module.get<ItemTagLinksController>(ItemTagLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
