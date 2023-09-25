import { Test, TestingModule } from '@nestjs/testing';
import { StockingPlacesController } from './stocking-places.controller';
import { StockingPlacesService } from './stocking-places.service';

describe('StockingPlacesController', () => {
  let controller: StockingPlacesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockingPlacesController],
      providers: [StockingPlacesService],
    }).compile();

    controller = module.get<StockingPlacesController>(StockingPlacesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
