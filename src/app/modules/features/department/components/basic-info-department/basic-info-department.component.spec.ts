import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoDepartmentComponent } from './basic-info-department.component';

describe('BasicInfoDepartmentComponent', () => {
  let component: BasicInfoDepartmentComponent;
  let fixture: ComponentFixture<BasicInfoDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
