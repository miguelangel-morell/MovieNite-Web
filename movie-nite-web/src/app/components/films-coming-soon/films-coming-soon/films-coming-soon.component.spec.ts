import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsComingSoonComponent } from './films-coming-soon.component';

describe('FilmsComingSoonComponent', () => {
  let component: FilmsComingSoonComponent;
  let fixture: ComponentFixture<FilmsComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsComingSoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
