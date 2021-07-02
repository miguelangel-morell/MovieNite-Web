import { TestBed } from '@angular/core/testing';

import { CinemasNearbyService } from './cinemas-nearby.service';

describe('CinemasNearbyService', () => {
  let service: CinemasNearbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemasNearbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
