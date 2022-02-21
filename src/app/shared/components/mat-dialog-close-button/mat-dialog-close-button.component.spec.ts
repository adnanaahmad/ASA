import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogCloseButtonComponent } from './mat-dialog-close-button.component';

describe('MatDialogCloseButtonComponent', () => {
  let component: MatDialogCloseButtonComponent;
  let fixture: ComponentFixture<MatDialogCloseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogCloseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogCloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
