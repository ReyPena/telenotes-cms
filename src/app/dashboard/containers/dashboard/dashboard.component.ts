import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCompanies } from '../../reducers/dashboard.reducer';
import { ICompany } from '../../interfaces/company';
import { IDashboardState } from '../../interfaces/dashboard-state';
import { MatDialog } from '@angular/material';
import { CompanyDialogComponent } from '../../components/company-dialog/company-dialog.component';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  companies: ICompany[] = [];

  constructor(
    private readonly _companyService: CompanyService,
    private readonly _store: Store<IDashboardState>,
    private readonly _dialog: MatDialog
  ) { }

  /**
   * Lifecycle hook.
   */
  ngOnInit() {
    this._companyService.loadCompanies();

    this._store.select(getCompanies)
      .subscribe((companiesState) => {
        this.companies = companiesState;
      });
  }

  addCompany() {
    const dialogRef = this._dialog.open(CompanyDialogComponent, {
      width: '70vw',
      data: {} // TODO: Create enum CompanyDialogAction.Add
    });

    dialogRef.afterClosed()
      .subscribe((company: ICompany) => {
        if (company) {
          this._companyService.createCompany(company);
        }
      });
  }
}
