import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityPolicyRoutingModule } from './security-policy-routing.module';
import { SecurityPolicyComponent } from './components/security-policy/security-policy.component';

@NgModule({
  declarations: [
    SecurityPolicyComponent
  ],
  imports: [
    CommonModule,
    SecurityPolicyRoutingModule
  ]
})
export class SecurityPolicyModule { }
