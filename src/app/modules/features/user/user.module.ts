import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
