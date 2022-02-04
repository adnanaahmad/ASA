import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./components/navigation/navigation.component";

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'integrity-suite', loadChildren: () => import('../features/integrity-suite/integrity-suite.module').then(m => m.IntegritySuiteModule) },
      { path: 'organization', loadChildren: () => import('../features/organization/organization.module').then(m => m.OrganizationModule) },
      { path: 'tenant', loadChildren: () => import('../features/tenant/tenant.module').then(m => m.TenantModule) },
      { path: 'department', loadChildren: () => import('../features/department/department.module').then(m => m.DepartmentModule) },
      { path: 'user-group', loadChildren: () => import('../features/user-group/user-group.module').then(m => m.UserGroupModule) },
      { path: 'user', loadChildren: () => import('../features/user/user.module').then(m => m.UserModule) },
      { path: 'security-policy', loadChildren: () => import('../features/security-policy/security-policy.module').then(m => m.SecurityPolicyModule) },
      { path: 'alivia-services', loadChildren: () => import('../features/alivia-services/alivia-services.module').then(m => m.AliviaServicesModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
