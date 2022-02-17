import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwaAccessControlComponent } from './fwa-access-control.component';

describe('FwaAccessControlComponent', () => {
  let component: FwaAccessControlComponent;
  let fixture: ComponentFixture<FwaAccessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwaAccessControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FwaAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
