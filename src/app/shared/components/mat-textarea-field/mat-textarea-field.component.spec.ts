import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTextareaFieldComponent } from './mat-textarea-field.component';

describe('MatTextareaFieldComponent', () => {
  let component: MatTextareaFieldComponent;
  let fixture: ComponentFixture<MatTextareaFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTextareaFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTextareaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
