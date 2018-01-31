import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { dashboard } from './reducers/dashboard.reducer';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDialogComponent } from './components/company-dialog/company-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './services/company.service';
import { CompanyComponent } from './containers/company/company.component';
import { ContactsComponent } from './components/contacts/contacts.component';

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
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    StoreModule.forFeature('dashboard', dashboard)
  ],
  providers: [ CompanyService ],
  entryComponents: [
    CompanyDialogComponent
  ],
  declarations: [DashboardComponent, CompaniesComponent, CompanyDialogComponent, CompanyComponent, ContactsComponent]
})
export class DashboardModule {
}

