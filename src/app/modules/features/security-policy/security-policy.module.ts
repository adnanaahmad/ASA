import { NgModule } from '@angular/core';
import { SecurityPolicyRoutingModule } from './security-policy-routing.module';
import { SecurityPolicyComponent } from './components/security-policy/security-policy.component';
import { MutualModule } from 'src/app/mutual.module';

@NgModule({
  declarations: [
    SecurityPolicyComponent
  ],
  imports: [
    MutualModule,
    SecurityPolicyRoutingModule
  ]
})
export class SecurityPolicyModule { }
