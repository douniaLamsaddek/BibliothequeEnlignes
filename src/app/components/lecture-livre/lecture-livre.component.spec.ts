import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureLivreComponent } from './lecture-livre.component';

describe('LectureLivreComponent', () => {
  let component: LectureLivreComponent;
  let fixture: ComponentFixture<LectureLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
