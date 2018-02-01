import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getContacts } from '../../reducers/dashboard.reducer';
import { IContact, IDashboardState } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services';
import { ContactDialogComponent } from '../../components/contact-dialog/contact-dialog.component';
import { MatDialog } from '@angular/material';

/**
 * Contacts component.
 * TODO: Rename to contacts component.
 */
@Component({
  selector: 'app-company',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  /**
   * The loaded contacts
   * @type {number}
   */
  companyId: number;

  /**
   *  Collection of contacts for loaded/current
   *  contacts.
   *
   *  @type {IContact[]}
   */
  contacts: IContact[];

  /**
   *
   * @param {CompanyService} _companyService
   * @param {Store<IDashboardState>} _store
   * @param {ActivatedRoute} _route
   * @param {MatDialog} _dialog
   */
  constructor(
    private readonly _companyService: CompanyService,
    private readonly _store: Store<IDashboardState>,
    private readonly _route: ActivatedRoute,
    private readonly _dialog: MatDialog) {
  }

  /**
   * Lifecycle hook.
   */
  async ngOnInit() {
    await this._companyService.loadCompanies();

    this._route.params.subscribe((params) => {
      this.companyId = params['id'];
    });

    this._store.select(getContacts)
      .subscribe((contactsState) => {
        this.contacts = contactsState[this.companyId];
      });
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
