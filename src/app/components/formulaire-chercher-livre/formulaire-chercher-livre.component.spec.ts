import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireChercherLivreComponent } from './formulaire-chercher-livre.component';

describe('FormulaireChercherLivreComponent', () => {
  let component: FormulaireChercherLivreComponent;
  let fixture: ComponentFixture<FormulaireChercherLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireChercherLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireChercherLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
