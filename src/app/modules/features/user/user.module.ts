import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    MutualModule,
    UserRoutingModule
  ]
})
export class UserModule { }
