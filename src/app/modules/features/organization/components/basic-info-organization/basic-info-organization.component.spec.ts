import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoOrganizationComponent } from './basic-info-organization.component';

describe('BasicInfoOrganizationComponent', () => {
  let component: BasicInfoOrganizationComponent;
  let fixture: ComponentFixture<BasicInfoOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
