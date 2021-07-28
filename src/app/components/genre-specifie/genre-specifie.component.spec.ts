import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSpecifieComponent } from './genre-specifie.component';

describe('GenreSpecifieComponent', () => {
  let component: GenreSpecifieComponent;
  let fixture: ComponentFixture<GenreSpecifieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreSpecifieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreSpecifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
