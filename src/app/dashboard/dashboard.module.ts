import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatListModule } from '@angular/material';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {dashboard} from './reducers/dashboard.reducer';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDialogComponent } from './components/company-dialog/company-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    StoreModule.forFeature('dashboard', dashboard)
  ],
  declarations: [DashboardComponent, CompaniesComponent, CompanyDialogComponent],
  entryComponents: [
    CompanyDialogComponent
  ]
})
export class DashboardModule { }
