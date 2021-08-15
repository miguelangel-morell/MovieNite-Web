import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsShowingFilterComponent } from './films-showing-filter.component';

describe('FilmsShowingFilterComponent', () => {
  let component: FilmsShowingFilterComponent;
  let fixture: ComponentFixture<FilmsShowingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsShowingFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsShowingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
