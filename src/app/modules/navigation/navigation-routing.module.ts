import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigationComponent} from "./components/navigation/navigation.component";

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      { path: 'integrity-suite', loadChildren: () => import('../integrity-suite/integrity-suite.module').then(m => m.IntegritySuiteModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
