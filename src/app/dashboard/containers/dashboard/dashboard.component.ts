import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getCompanies} from '../../reducers/dashboard.reducer';
import {ICompany} from '../../interfaces/company';
import {IDashboardState} from '../../interfaces/dashboard-state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  companies: ICompany[] = [];

  constructor(private readonly _store: Store<IDashboardState>) { }

  ngOnInit() {
    this._store.select(getCompanies)
      .subscribe((companiesState) => {
          this.companies = companiesState;
      });
  }
}
