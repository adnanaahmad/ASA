import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import {SharedModule} from "../../../shared/shared.module";
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';

@NgModule({
  declarations: [
    UserComponent,
    AddUserDialogComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
