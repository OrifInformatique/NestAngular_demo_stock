import { Test, TestingModule } from '@nestjs/testing';
import { ItemCommonsController } from './item-commons.controller';
import { ItemCommonsService } from './item-commons.service';

describe('ItemCommonsController', () => {
  let controller: ItemCommonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemCommonsController],
      providers: [ItemCommonsService],
    }).compile();

    controller = module.get<ItemCommonsController>(ItemCommonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
