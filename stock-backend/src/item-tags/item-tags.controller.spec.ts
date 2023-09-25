import { Test, TestingModule } from '@nestjs/testing';
import { ItemTagsController } from './item-tags.controller';
import { ItemTagsService } from './item-tags.service';

describe('ItemTagsController', () => {
  let controller: ItemTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemTagsController],
      providers: [ItemTagsService],
    }).compile();

    controller = module.get<ItemTagsController>(ItemTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
