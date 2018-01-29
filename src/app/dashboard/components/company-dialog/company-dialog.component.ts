import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ICompany } from '../../interfaces/company';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from 'typed-countries';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {

  company: ICompany = {
    CompanyID: 0,
    AccountId: 0,
    CompanyName: '',
    StreetAddress: '',
    StreetAddress2: '',
    City: '',
    State: '',
    Country: '',
    ZipCode: '',
    webSite: '',
    CreatedDate: Date(),

    status: '',
    Type: ''
  };

  companyForm: FormGroup;

  countriesData = countries;

  constructor(private readonly _fb: FormBuilder,
              private readonly _dialogRef: MatDialogRef<CompanyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ICompany) {
  }

  ngOnInit() {
    this.createFrom();
  }

  close() {
    this._dialogRef.close(this.company);
  }

  createFrom() {
    this.companyForm = this._fb.group({
      companyName: [null, Validators.required],
      streetAddress: [null, Validators.required],
      streetAddress2: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      zipCode: [null, Validators.required],
      webSite: [null, Validators.required],
      status: [null, Validators.required],
      type: [null, Validators.required]
    });
  }
}
