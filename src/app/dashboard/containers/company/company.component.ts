import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getContacts } from '../../reducers/dashboard.reducer';
import { IContact, IDashboardState } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services';

/**
 * Contacts component.
 * TODO: Rename to contacts component.
 */
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  /**
   * The loaded company
   * @type {number}
   */
  companyId: number;

  /**
   *  Collection of contacts for loaded/current
   *  company.
   *
   *  @type {IContact[]}
   */
  contacts: IContact[];

  /**
   *
   * @param {CompanyService} _companyService
   * @param {Store<IDashboardState>} _store
   * @param {ActivatedRoute} _route
   */
  constructor(
    private readonly _companyService: CompanyService,
    private readonly _store: Store<IDashboardState>,
    private readonly _route: ActivatedRoute) {
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

}
