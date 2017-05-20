import { TestBed, inject } from '@angular/core/testing';

import { ProgressiveService } from './progressive.service';

describe('ProgressiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressiveService]
    });
  });

  it('should be created', inject([ProgressiveService], (service: ProgressiveService) => {
    expect(service).toBeTruthy();
  }));
});
