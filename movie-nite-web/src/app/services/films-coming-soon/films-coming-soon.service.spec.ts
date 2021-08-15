import { TestBed } from '@angular/core/testing';

import { FilmsComingSoonService } from './films-coming-soon.service';

describe('FilmsComingSoonService', () => {
  let service: FilmsComingSoonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsComingSoonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
