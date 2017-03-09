import { TestBed, inject } from '@angular/core/testing';
import { CuidadorService } from './cuidador.service';

describe('CuidadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CuidadorService]
    });
  });

  it('should ...', inject([CuidadorService], (service: CuidadorService) => {
    expect(service).toBeTruthy();
  }));
});
