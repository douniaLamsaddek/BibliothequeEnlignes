import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireOfrirLivreComponent } from './formulaire-ofrir-livre.component';

describe('FormulaireOfrirLivreComponent', () => {
  let component: FormulaireOfrirLivreComponent;
  let fixture: ComponentFixture<FormulaireOfrirLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireOfrirLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireOfrirLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
