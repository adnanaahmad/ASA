import { NgModule } from '@angular/core';
import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    UserGroupComponent
  ],
  imports: [
    MutualModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }
