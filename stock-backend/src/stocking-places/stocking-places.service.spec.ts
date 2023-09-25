import { Test, TestingModule } from '@nestjs/testing';
import { StockingPlacesService } from './stocking-places.service';

describe('StockingPlacesService', () => {
  let service: StockingPlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockingPlacesService],
    }).compile();

    service = module.get<StockingPlacesService>(StockingPlacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
