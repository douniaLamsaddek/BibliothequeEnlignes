import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parti2Component } from './parti2.component';

describe('Parti2Component', () => {
  let component: Parti2Component;
  let fixture: ComponentFixture<Parti2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parti2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parti2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
