import { TestBed } from '@angular/core/testing';

import { StockingPlacesService } from './stocking-places.service';

describe('StockingPlacesService', () => {
  let service: StockingPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockingPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
