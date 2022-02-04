import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegritySuiteComponent } from './integrity-suite.component';

describe('IntegritySuiteComponent', () => {
  let component: IntegritySuiteComponent;
  let fixture: ComponentFixture<IntegritySuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegritySuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegritySuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
