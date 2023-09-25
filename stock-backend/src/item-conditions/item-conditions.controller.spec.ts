import { Test, TestingModule } from '@nestjs/testing';
import { ItemConditionsController } from './item-conditions.controller';
import { ItemConditionsService } from './item-conditions.service';

describe('ItemConditionsController', () => {
  let controller: ItemConditionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemConditionsController],
      providers: [ItemConditionsService],
    }).compile();

    controller = module.get<ItemConditionsController>(ItemConditionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
