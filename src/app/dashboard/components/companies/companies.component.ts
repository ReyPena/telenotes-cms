import { Component, Input, } from '@angular/core';
import { ICompany } from '../../interfaces';
import { CompanyDialogComponent } from '../company-dialog';
import { MatDialog } from '@angular/material';
import { CompanyService } from '../../services';

/**
 * UI for collection of companies
 */
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  /**
   * Collection of companies to render.
   * @type {ICompany[]}
   */
  @Input() companies: ICompany[];

  /**
   * Consturcs instance of @see {@link CompaniesComponent}
   * @param {MatDialog} _dialog
   * @param {CompanyService} _companyService
   */
  constructor(
    private readonly _dialog: MatDialog,
    private readonly _companyService: CompanyService
  ) { }

  /**
   * Removes company for given company id.
   * @param {number} companyId
   */
  async removeCompany(companyId: number) {
    await this._companyService.deleteCompany(companyId);

    // TODO: While this is no ideal this is good enough for this project
    this._companyService.loadCompanies();
  }

  /**
   * Opens edit company dialog and handles its callback data.
   * @param data
   */
  editCompany(data) {
    const dialogRef = this._dialog.open(CompanyDialogComponent, {
      width: '70vw',
      data
    });

    dialogRef.afterClosed().subscribe(async (company: ICompany) => {
      if (company) {
        await this._companyService.updateCompany(company);
        this._companyService.loadCompanies();
      }
    });
  }
}
