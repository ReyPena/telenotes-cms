import { Component, Input, OnInit } from '@angular/core';
import { IContact } from '../../interfaces';
import { MatDialog } from '@angular/material';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { ContactService } from '../../services';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() contacts: IContact[];
  @Input() company: string;

  constructor(private readonly _dialog: MatDialog,
              private readonly _contactService: ContactService
  ) {
  }

  ngOnInit() {
  }

  /**
   * Remove Contact form the Company
   * TODO: Remove method in the contact service
   *
   * @param id
   */
  removeContact(id) {}

  /**
   * Edit Contact from Company
   * TODO: Create create method in the contact service
   *
   * @param data
   */
  editContact(data) {
    const dialogRef = this._dialog.open(ContactDialogComponent, {
      width: '70vw',
      data
    });

    dialogRef.afterClosed()
      .subscribe((contact: IContact) => {
      if (contact) {
        console.log('Update here');
      }
    });
  }
}
