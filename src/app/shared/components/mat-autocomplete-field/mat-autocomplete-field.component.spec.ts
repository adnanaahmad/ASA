import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAutocompleteFieldComponent } from './mat-autocomplete-field.component';

describe('MatAutocompleteFieldComponent', () => {
  let component: MatAutocompleteFieldComponent;
  let fixture: ComponentFixture<MatAutocompleteFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatAutocompleteFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAutocompleteFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
