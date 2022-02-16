import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTenantComponent } from './basic-info-tenant.component';

describe('BasicInfoTenantComponent', () => {
  let component: BasicInfoTenantComponent;
  let fixture: ComponentFixture<BasicInfoTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoTenantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
