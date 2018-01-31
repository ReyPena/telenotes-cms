import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from '../../interfaces/company';
import { CompanyDialogComponent } from '../company-dialog/company-dialog.component';
import { MatDialog } from '@angular/material';
import { CompanyService } from '../../services';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  @Input() companies: ICompany[];

  constructor(private readonly _dialog: MatDialog,
              private readonly _companyService: CompanyService
  ) {
  }

  ngOnInit() {
  }

  removeCompany(id) {
    this._companyService.deleteCompany(id).then(() => {
      // TODO: While this is no ideal this is good enough for this project
      this._companyService.loadCompanies();
    });

  }

  editCompany(data) {
    const dialogRef = this._dialog.open(CompanyDialogComponent, {
      width: '70vw',
      data
    });

    dialogRef.afterClosed().subscribe((company: ICompany) => {
      if (company) {
        this._companyService.updateCompany(company).then(() => {
          this._companyService.loadCompanies();
        });
      }
    });
  }
}
