import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule } from '@angular/material';

import { DashboardComponent } from './containers/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
