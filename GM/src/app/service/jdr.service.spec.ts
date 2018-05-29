import { TestBed, inject } from '@angular/core/testing';

import { JdrService } from './jdr.service';

describe('JdrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JdrService]
    });
  });

  it('should be created', inject([JdrService], (service: JdrService) => {
    expect(service).toBeTruthy();
  }));
});
