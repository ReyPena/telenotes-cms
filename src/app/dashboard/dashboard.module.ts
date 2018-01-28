import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {MatButtonModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {companies} from './reducers/companies.reducer';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    StoreModule.forFeature('companies', companies)
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
