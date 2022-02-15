import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserGroupDialogComponent } from './add-user-group-dialog.component';

describe('AddUserGroupDialogComponent', () => {
  let component: AddUserGroupDialogComponent;
  let fixture: ComponentFixture<AddUserGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserGroupDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
