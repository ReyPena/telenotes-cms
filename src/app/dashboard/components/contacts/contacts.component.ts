import { Component, Input, OnInit } from '@angular/core';
import { IContact } from '../../interfaces';
import { MatDialog } from '@angular/material';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() contacts: IContact[];

  constructor(private readonly _dialog: MatDialog) { }

  ngOnInit() {
  }

  removeContact() {}

  editContact(data) {
    const dialogRef = this._dialog.open(ContactDialogComponent, {
      width: '70vw',
      data
    });

    dialogRef.afterClosed()
      .subscribe((contact: IContact) => {
      if (contact) {
        console.log(contact);
      }
    });
  }
}
