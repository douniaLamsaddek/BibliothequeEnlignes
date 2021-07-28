import { TestBed } from '@angular/core/testing';

import { DonneesFormulaireService } from './donnees-formulaire.service';

describe('DonneesFormulaireService', () => {
  let service: DonneesFormulaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonneesFormulaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
