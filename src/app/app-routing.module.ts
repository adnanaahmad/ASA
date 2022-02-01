import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./shared/services/core/gurads/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    //canActivate: [AuthGuard],
    loadChildren: () => import('src/app/modules/navigation/navigation.module').then(m => m.NavigationModule)
  },
  {
    path: '**',
    loadChildren: () => import('src/app/shared/shared.module').then(m => m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
