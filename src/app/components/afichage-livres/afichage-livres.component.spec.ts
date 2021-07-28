import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfichageLivresComponent } from './afichage-livres.component';

describe('AfichageLivresComponent', () => {
  let component: AfichageLivresComponent;
  let fixture: ComponentFixture<AfichageLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfichageLivresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfichageLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
