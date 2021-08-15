import { TestBed } from '@angular/core/testing';

import { FilmsShowingService } from './films-showing.service';

describe('FilmsShowingService', () => {
  let service: FilmsShowingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsShowingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
