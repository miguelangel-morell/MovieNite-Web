import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmShowtimeHoursComponent } from './film-showtime-hours.component';

describe('FilmShowtimeHoursComponent', () => {
  let component: FilmShowtimeHoursComponent;
  let fixture: ComponentFixture<FilmShowtimeHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmShowtimeHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmShowtimeHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
