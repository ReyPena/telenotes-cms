import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContact } from '../../interfaces';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {
  contact: IContact = {
    ContactId: this.data.ContactId || null,
    title: this.data.title || '',
    firstname: this.data.firstname || '',
    LastName: this.data.LastName || '',
    ContactCity: this.data.ContactCity || '',
    ContactState: this.data.ContactState || '',
    ContactZip: this.data.ContactZip || '',
    PrimaryPhone: this.data.PrimaryPhone || '',
    ext: this.data.ext || '',
    MobilePhone: this.data.MobilePhone || '',
    fax: this.data.fax || '',
    email: this.data.email || '',
    ContactAddress: this.data.ContactAddress || '',
    Contactaddress2: this.data.Contactaddress2 || '',
    HomePhone: this.data.HomePhone || '',
    email2: this.data.email2 || '',
    dept: this.data.dept || '',
    birthday: this.data.birthday || ''
  };

  contactForm: FormGroup;

  constructor(private readonly _dialogRef: MatDialogRef<ContactDialogComponent>,
              private readonly _fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: IContact) {
  }

  ngOnInit() {
    this.formRules();
  }

  close() {
    this._dialogRef.close(this.contact);
  }

  formRules() {
    this.contactForm = this._fb.group({
      firstname: [null, Validators.required],
      LastName: [null, Validators.required],
      title: [null, Validators.required],
      ContactAddress: [null, Validators.required],
      Contactaddress2: [null],
      ContactCity: [null, Validators.required],
      ContactState: [null, Validators.required],
      ContactZip: [null, Validators.required],
      ext: [null],
      PrimaryPhone: [null, Validators.required],
      MobilePhone: [null],
      HomePhone: [null],
      fax: [null],
      email: [null, Validators.required],
      email2: [null],
      dept: [null],
      birthday: [null, Validators.required]
    });
  }
}
