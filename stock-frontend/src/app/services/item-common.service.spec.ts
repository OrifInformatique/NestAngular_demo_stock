import { TestBed } from '@angular/core/testing';

import { ItemCommonService } from './item-common.service';

describe('ItemCommonService', () => {
  let service: ItemCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
