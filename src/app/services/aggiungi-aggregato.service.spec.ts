import { TestBed, inject } from '@angular/core/testing';

import { AggiungiAggregatoService } from './aggiungi-aggregato.service';

describe('AggiungiAggregatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AggiungiAggregatoService]
    });
  });

  it('should be created', inject([AggiungiAggregatoService], (service: AggiungiAggregatoService) => {
    expect(service).toBeTruthy();
  }));
});
