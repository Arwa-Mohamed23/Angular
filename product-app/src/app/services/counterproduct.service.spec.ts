import { TestBed } from '@angular/core/testing';

import { CounterproductService } from './counterproduct.service';

describe('CounterproductService', () => {
  let service: CounterproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
