import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyPostComponent } from './recently-post.component';

describe('RecentlyPostComponent', () => {
  let component: RecentlyPostComponent;
  let fixture: ComponentFixture<RecentlyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
