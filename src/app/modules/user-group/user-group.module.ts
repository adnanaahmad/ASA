import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupComponent } from './components/user-group/user-group.component';

@NgModule({
  declarations: [
    UserGroupComponent
  ],
  imports: [
    CommonModule,
    UserGroupRoutingModule
  ]
})
export class UserGroupModule { }
