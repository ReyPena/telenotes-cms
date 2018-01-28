import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {MatButtonModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {dashboard} from './reducers/dashboard.reducer';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    StoreModule.forFeature('dashboard', dashboard)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
