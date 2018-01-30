import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from '../../interfaces/company';
import { CompanyDialogComponent } from '../company-dialog/company-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  @Input() companies: ICompany[];

  constructor(private readonly _dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  editCompany(company) {
    console.log(company)
    const dialogRef = this._dialog.open(CompanyDialogComponent, {
      width: '70vw',
      data: company
    });
  }
}
