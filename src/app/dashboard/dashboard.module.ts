import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatIconModule, MatInputModule, MatOptionModule, MatSelectModule
} from '@angular/material';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { dashboard } from './reducers/dashboard.reducer';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDialogComponent } from './components/company-dialog/company-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './services/company.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    StoreModule.forFeature('dashboard', dashboard)
  ],
  providers: [ CompanyService ],
  entryComponents: [
    CompanyDialogComponent
  ],
  declarations: [DashboardComponent, CompaniesComponent, CompanyDialogComponent]
})
export class DashboardModule {
}

