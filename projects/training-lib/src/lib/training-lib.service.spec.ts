import { TestBed } from '@angular/core/testing';

import { TrainingLibService } from './training-lib.service';

describe('TrainingLibService', () => {
  let service: TrainingLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
