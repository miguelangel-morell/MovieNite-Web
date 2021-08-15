import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsShowingComponent } from './films-showing.component';

describe('FilmsShowingComponent', () => {
  let component: FilmsShowingComponent;
  let fixture: ComponentFixture<FilmsShowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsShowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
