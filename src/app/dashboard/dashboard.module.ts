import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatIconModule, MatInputModule, MatOptionModule, MatSelect,
  MatSelectModule
} from '@angular/material';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { dashboard } from './reducers/dashboard.reducer';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDialogComponent } from './components/company-dialog/company-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('dashboard', dashboard)
  ],
  declarations: [DashboardComponent, CompaniesComponent, CompanyDialogComponent],
  entryComponents: [
    CompanyDialogComponent
  ]
})
export class DashboardModule { }
