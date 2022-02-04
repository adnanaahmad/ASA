import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityPolicyComponent } from './components/security-policy/security-policy.component';

const routes: Routes = [{ path: '', component: SecurityPolicyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityPolicyRoutingModule { }
