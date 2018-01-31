import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * App lazy loaded routes.
 * @type {{path: string; loadChildren: string}[]}
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];

/**
 * App routing module.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
