import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoUserGroupComponent } from './basic-info-user-group.component';

describe('BasicInfoUserGroupComponent', () => {
  let component: BasicInfoUserGroupComponent;
  let fixture: ComponentFixture<BasicInfoUserGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoUserGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
