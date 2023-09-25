import { TestBed } from '@angular/core/testing';

import { ItemTagsService } from './item-tags.service';

describe('ItemTagsService', () => {
  let service: ItemTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
