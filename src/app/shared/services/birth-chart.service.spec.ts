import { TestBed } from '@angular/core/testing';

import { BirthChartService } from './birth-chart.service';

describe('BirthChartService', () => {
  let service: BirthChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
