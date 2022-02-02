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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
