import { TestBed } from '@angular/core/testing';

import { FilmShowtimeService } from './film-showtime.service';

describe('FilmShowtimeService', () => {
  let service: FilmShowtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmShowtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
