import { TestBed } from '@angular/core/testing';

import { DataCalculationGuard } from './data-calculation.guard';

describe('DataCalculationGuard', () => {
  let guard: DataCalculationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DataCalculationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
