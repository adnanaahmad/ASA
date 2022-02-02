import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./components/navigation/navigation.component";

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'integrity-suite', loadChildren: () => import('../integrity-suite/integrity-suite.module').then(m => m.IntegritySuiteModule) },
      { path: 'organization', loadChildren: () => import('../organization/organization.module').then(m => m.OrganizationModule) },
      { path: 'tenant', loadChildren: () => import('../tenant/tenant.module').then(m => m.TenantModule) },
      { path: 'department', loadChildren: () => import('../department/department.module').then(m => m.DepartmentModule) },
      { path: 'user-group', loadChildren: () => import('../user-group/user-group.module').then(m => m.UserGroupModule) },
      { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
      { path: 'security-policy', loadChildren: () => import('../security-policy/security-policy.module').then(m => m.SecurityPolicyModule) },
      { path: 'alivia-services', loadChildren: () => import('../alivia-services/alivia-services.module').then(m => m.AliviaServicesModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
