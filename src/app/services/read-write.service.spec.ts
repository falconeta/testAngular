import { TestBed, inject } from '@angular/core/testing';

import { ReadWriteService } from './read-write.service';

describe('ReadWriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadWriteService]
    });
  });

  it('should be created', inject([ReadWriteService], (service: ReadWriteService) => {
    expect(service).toBeTruthy();
  }));
});
