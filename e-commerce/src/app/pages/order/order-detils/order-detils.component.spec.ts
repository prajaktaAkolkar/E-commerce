import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetilsComponent } from './order-detils.component';

describe('OrderDetilsComponent', () => {
  let component: OrderDetilsComponent;
  let fixture: ComponentFixture<OrderDetilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
