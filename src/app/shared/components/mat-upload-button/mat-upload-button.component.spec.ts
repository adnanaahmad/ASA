import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatUploadButtonComponent } from './mat-upload-button.component';

describe('MatUploadButtonComponent', () => {
  let component: MatUploadButtonComponent;
  let fixture: ComponentFixture<MatUploadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatUploadButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatUploadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
