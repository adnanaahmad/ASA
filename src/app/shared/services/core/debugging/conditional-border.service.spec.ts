import { TestBed } from '@angular/core/testing';

import { ConditionalBorderService } from './conditional-border.service';

describe('ConditionalBorderService', () => {
  let service: ConditionalBorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionalBorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
