import { TestBed } from '@angular/core/testing';

import { LifePeakService } from './life-peak.service';

describe('LifePeakService', () => {
  let service: LifePeakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifePeakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
