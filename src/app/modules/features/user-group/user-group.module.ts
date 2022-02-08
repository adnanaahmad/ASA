import { NgModule } from '@angular/core';
import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupComponent } from './components/user-group/user-group.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    UserGroupComponent
  ],
  imports: [
    SharedModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }
