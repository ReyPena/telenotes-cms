import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCompanies } from '../../reducers/dashboard.reducer';
import { ICompany, IDashboardState } from '../../interfaces';
import { MatDialog } from '@angular/material';
import { CompanyDialogComponent } from '../../components/company-dialog/company-dialog.component';
import { CompanyService } from '../../services';

/**
 * Represents the application dashboard.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /**
   * Collection of companies.
   * @type {ICompany[]}
   */
  companies: ICompany[] = [];

  /**
   * Constructs instance of @see {@link DashboardComponent}
   *
   * @param {CompanyService} _companyService
   * @param {Store<IDashboardState>} _store
   * @param {MatDialog} _dialog
   */
  constructor(
    private readonly _companyService: CompanyService,
    private readonly _store: Store<IDashboardState>,
    private readonly _dialog: MatDialog) {
  }

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

  /**
   * Opens add company dialog and processed
   * its callback data to pass to service.
   */
  async addCompany() {
    const dialogRef = this._dialog.open(CompanyDialogComponent, {
      width: '70vw',
      data: {}
    });

    dialogRef.afterClosed()
      .subscribe(async (company: ICompany) => {
        if (company) {
          await this._companyService.createCompany(company);
          this._companyService.loadCompanies();
        }
      });
  }
}
