import { TestBed, inject } from '@angular/core/testing';

import { RetrjsnService } from './retrjsn.service';

describe('RetrjsnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrjsnService]
    });
  });

  it('should be created', inject([RetrjsnService], (service: RetrjsnService) => {
    expect(service).toBeTruthy();
  }));
});
