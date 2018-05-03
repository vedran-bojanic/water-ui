import { TestBed, inject } from '@angular/core/testing';

import { BeerStyleService } from './beer-style.service';

describe('BeerStyleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerStyleService]
    });
  });

  it('should be created', inject([BeerStyleService], (service: BeerStyleService) => {
    expect(service).toBeTruthy();
  }));
});
