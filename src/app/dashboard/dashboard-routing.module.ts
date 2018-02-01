import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ContactsComponent } from './containers/contacts/contacts.component';

/**
 * Dashboard module routes.
 * @type {({path: string; component: DashboardComponent} | {path: string; component: CompanyComponent})[]}
 */
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'contacts/:id',
    component: ContactsComponent
  }
];

/**
 * Dashboard routing module.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
