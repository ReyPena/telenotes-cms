import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ICompany } from '../../interfaces/company';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from 'typed-countries';
import * as uuidv1 from 'uuid/v1';

@Component({
  selector: 'app-company-dialog',
  templateUrl: './company-dialog.component.html',
  styleUrls: ['./company-dialog.component.scss']
})
export class CompanyDialogComponent implements OnInit {

  company: ICompany = {
    CompanyID: Math.floor(10000000 + Math.random() * 90000000 + new Date().getMilliseconds()),
    AccountId: uuidv1(),
    CompanyName: '',
    StreetAddress: '',
    StreetAddress2: '',
    City: '',
    State: '',
    Country: '',
    ZipCode: '',
    webSite: '',
    CreatedDate: Date(),
    Contacts: [],
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
      streetAddress2: [null],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      zipCode: [null, Validators.required],
      webSite: [null],
      status: [null, Validators.required],
      type: [null, Validators.required]
    });
  }
}
