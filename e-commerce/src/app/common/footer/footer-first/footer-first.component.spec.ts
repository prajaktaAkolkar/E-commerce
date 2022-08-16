import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFirstComponent } from './footer-first.component';

describe('FooterFirstComponent', () => {
  let component: FooterFirstComponent;
  let fixture: ComponentFixture<FooterFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
