import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredItemsPageComponent } from './filtered-items-page.component';

describe('FilteredItemsPageComponent', () => {
  let component: FilteredItemsPageComponent;
  let fixture: ComponentFixture<FilteredItemsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredItemsPageComponent]
    });
    fixture = TestBed.createComponent(FilteredItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
