import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICompany, IContact, IDashboardState } from '../interfaces';

/**
 * Base api url to perform requests on.
 * @type {string}
 */
const API_URL = environment.url;

/**
 * Contact service.
 */
@Injectable()
export class ContactService {
  /**
   * Creates instance of @see {@link CompanyService}
   *
   * @param {HttpClient} _httpClient
   * @param {Store} _store
   */
  constructor(
    private readonly _store: Store<IDashboardState>,
    private readonly _httpClient: HttpClient
  ) { }

  /**
   * Update contact
   * TODO: Update contact using the update method
   *
   * @param {IContact} company
   * @returns {Promise<void>}
   */
  async updateContact(contact: IContact) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    try {
      await this._httpClient
        .post<ICompany[]>(API_URL, {}, { headers })
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }

}
