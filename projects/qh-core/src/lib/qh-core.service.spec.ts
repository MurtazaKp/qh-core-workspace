import { TestBed } from '@angular/core/testing';

import { QhCoreService } from './qh-core.service';

describe('QhCoreService', () => {
  let service: QhCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QhCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
