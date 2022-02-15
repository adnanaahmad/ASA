import { NgModule } from '@angular/core';
import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupComponent } from './components/user-group/user-group.component';
import {SharedModule} from "../../../shared/shared.module";
import { AddUserGroupDialogComponent } from './components/add-user-group-dialog/add-user-group-dialog.component';

@NgModule({
  declarations: [
    UserGroupComponent,
    AddUserGroupDialogComponent
  ],
  imports: [
    SharedModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }
