import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCommonDetailsComponent } from './item-common-details.component';

describe('ItemCommonDetailsComponent', () => {
  let component: ItemCommonDetailsComponent;
  let fixture: ComponentFixture<ItemCommonDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCommonDetailsComponent]
    });
    fixture = TestBed.createComponent(ItemCommonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
