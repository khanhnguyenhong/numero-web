import { TestBed } from '@angular/core/testing';

import { RulingNumberService } from './ruling-number.service';

describe('RulingNumberService', () => {
  let service: RulingNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulingNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
