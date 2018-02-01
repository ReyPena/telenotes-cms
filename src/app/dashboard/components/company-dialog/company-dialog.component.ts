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
  /**
   * Decides whether to render edit or add dialog.
   * TODO: Use CompanyDialogTypes enum.
   * @type {boolean | boolean}
   */
  addMode: boolean = Object.keys(this.data).length === 0;

  company: ICompany = {
    CompanyID: this.data.CompanyID || Math.floor(10000000 + Math.random() * 90000000),
    AccountId: this.data.AccountId || uuidv1(),
    CompanyName: this.data.CompanyName || '',
    StreetAddress: this.data.StreetAddress || '',
    StreetAddress2: this.data.StreetAddress2 || '',
    City: this.data.City || '',
    State: this.data.State || '',
    Country: this.data.Country || '',
    ZipCode: this.data.ZipCode || '',
    webSite: this.data.webSite || '',
    Contacts: [],
    CreatedDate: this.data.CreatedDate || Date(),
    status: this.data.status || '',
    Type: this.data.Type || ''
  };

  companyForm: FormGroup;

  countriesData = countries;

  constructor(private readonly _dialogRef: MatDialogRef<CompanyDialogComponent>,
              private readonly _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: ICompany) {
  }

  ngOnInit() {
    this.formRules();
  }

  close() {
    this._dialogRef.close(this.company);
  }

  formRules() {
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
