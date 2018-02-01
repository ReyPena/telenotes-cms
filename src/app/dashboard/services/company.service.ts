import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICompany, IContactDictionary, IDashboardState } from '../interfaces';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { SetCompanies } from '../actions';
import { SetContacts } from '../actions/dashboard.actions';
import { getContacts } from '../reducers/dashboard.reducer';

/**
 * Base api url to perform requests on.
 * @type {string}
 */
const API_URL = environment.url;

/**
 * Company service.
 */
@Injectable()
export class CompanyService {
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
   * Retrieves companies from api and dispatch them to
   * the redux store.
   *
   * @returns {Promise<void>}
   */
  async loadCompanies() {
    try {
      const companies = await this._httpClient
        .get<ICompany[]>(API_URL)
        .toPromise();

      const normalizedCompanies = this._normalizeCompanies(companies);
      const contactsDictionary = this._createContactsDictionary(companies);

      this._store.dispatch(new SetCompanies(normalizedCompanies));
      this._store.dispatch(new SetContacts(contactsDictionary));
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Update contacts
   *
   * @param {ICompany} company
   * @returns {Promise<void>}
   */
  async updateCompany(company: ICompany) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this._store.select(getContacts)
      .subscribe((contactsState) => {
        company['Contacts'] = contactsState[company.CompanyID];
      });

    console.log(company);

    try {
      await this._httpClient
        .post<ICompany[]>(API_URL, company, { headers })
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Creates a contacts.
   *
   * @param {ICompany} company
   * @returns {Promise<void>}
   */
  async createCompany(company: ICompany) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    try {
      await this._httpClient
        .put<ICompany[]>(API_URL, company, { headers })
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Deletes contacts.
   *
   * @param {string} companyId
   * @returns {Promise<void>}
   */
  async deleteCompany(companyId: number) {
    try {
      await this._httpClient
        .delete(`${API_URL}/${companyId}`)
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Normalizes collection of companies and initializes
   * unavailable values to their defaults.
   *
   * @param {ICompany[]} companies
   * @return {ICompany[]}
   * @private
   */
  private _normalizeCompanies(companies: ICompany[]) {
    return companies
      .map<ICompany>(this._normalizeCompany)
      .filter(company => company !== null);
  }

  /**
   * Normalizes given contacts and initializes undefined
   * values to its defaults.
   *
   * @param {ICompany} company
   * @returns {ICompany}
   * @private
   */
  private _normalizeCompany(company: ICompany): ICompany {
    if (company === null) {
      return null;
    }

    return {
      AccountId: company.AccountId || null,
      City: company.City || '',
      CompanyID: company.CompanyID || null,
      CompanyName: company.CompanyName || '',
      Country: company.Country || '',
      State: company.State || '',
      StreetAddress: company.StreetAddress || '',
      StreetAddress2: company.StreetAddress2 || '',
      Type: company.Type || '',
      status: company.status || '',
      webSite: company.webSite || '',
      ZipCode: company.webSite || '',
      CreatedDate: company.CreatedDate || ''
    };
  }

  /**
   * Creates dictionary of contacts.
   * Pair of contacts Ids and its collection of contacts.
   *
   * @param {ICompany[]} companies
   * @returns {IContactDictionary}
   * @private
   */
  private _createContactsDictionary(companies: ICompany[]) {
    const contacts: IContactDictionary = {};

    for (const company of companies) {
      if (company === null) {
        continue;
      }

      contacts[company.CompanyID] = company.Contacts;
    }

    return contacts;
  }
}

