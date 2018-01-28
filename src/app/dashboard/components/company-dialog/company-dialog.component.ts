import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ICompany } from '../../interfaces/company';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {
  company = 'test';

  // company: ICompany = {
  //   // TODO: Initialize model with interface contract
  // }

  constructor(
    private readonly _dialogRef: MatDialogRef<CompanyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICompany
  ) { }

  ngOnInit() {
  }

  close() {
    this._dialogRef.close(this.company);
  }
}
