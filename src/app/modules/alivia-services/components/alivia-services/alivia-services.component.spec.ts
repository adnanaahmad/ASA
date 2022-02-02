import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliviaServicesComponent } from './alivia-services.component';

describe('AliviaServicesComponent', () => {
  let component: AliviaServicesComponent;
  let fixture: ComponentFixture<AliviaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliviaServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AliviaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
