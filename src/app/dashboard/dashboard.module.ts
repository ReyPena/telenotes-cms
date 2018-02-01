import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { DashboardComponent } from './containers/dashboard';
import { dashboard } from './reducers/dashboard.reducer';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDialogComponent } from './components/company-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService, ContactService } from './services';
import { ContactDialogComponent } from './components/contact-dialog';
import { ContactsComponent } from './containers/contacts';

/**
 * Dashboard module.
 * Encapsulates all the dashboard functionality.
 */
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
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forFeature('dashboard', dashboard)
  ],
  providers: [CompanyService, ContactService],
  entryComponents: [
    CompanyDialogComponent,
    ContactDialogComponent
  ],
  declarations: [
    DashboardComponent,
    CompaniesComponent,
    CompanyDialogComponent,
    ContactsComponent,
    ContactDialogComponent
  ]
})
export class DashboardModule {
}

