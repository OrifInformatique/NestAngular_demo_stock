import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBarComponent } from './login-bar.component';

describe('LoginBarComponent', () => {
  let component: LoginBarComponent;
  let fixture: ComponentFixture<LoginBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginBarComponent]
    });
    fixture = TestBed.createComponent(LoginBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
