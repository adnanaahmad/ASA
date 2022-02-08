import { NgModule } from '@angular/core';
import { SecurityPolicyRoutingModule } from './security-policy-routing.module';
import { SecurityPolicyComponent } from './components/security-policy/security-policy.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  declarations: [
    SecurityPolicyComponent
  ],
  imports: [
    SharedModule,
    SecurityPolicyRoutingModule
  ]
})
export class SecurityPolicyModule { }
