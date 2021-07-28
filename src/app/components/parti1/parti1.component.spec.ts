import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parti1Component } from './parti1.component';

describe('Parti1Component', () => {
  let component: Parti1Component;
  let fixture: ComponentFixture<Parti1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parti1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Parti1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
