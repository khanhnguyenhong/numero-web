import { TestBed } from '@angular/core/testing';

import { DataCalculationService } from './data-calculation.service';

describe('DataCalculationService', () => {
  let service: DataCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
