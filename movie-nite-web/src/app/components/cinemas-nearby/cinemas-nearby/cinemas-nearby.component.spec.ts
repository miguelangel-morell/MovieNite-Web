import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemasNearbyComponent } from './cinemas-nearby.component';

describe('CinemasNearbyComponent', () => {
  let component: CinemasNearbyComponent;
  let fixture: ComponentFixture<CinemasNearbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemasNearbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemasNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
