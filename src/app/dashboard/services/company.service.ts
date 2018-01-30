import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICompany } from '../interfaces/company';
import { environment } from '../../../environments/environment';
import { IDashboardState } from '../interfaces/dashboard-state';
import { Store } from '@ngrx/store';
import { SetCompanies } from '../actions';

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

      this._store.dispatch(new SetCompanies(normalizedCompanies));
    } catch (error) {
      console.error(error);
    }
  }

  async updateCompany(company: ICompany) {
    try {
      await this._httpClient
        .post(API_URL, company)
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Creates a company.
   *
   * @param {ICompany} company
   * @returns {Promise<void>}
   */
  async createCompany(company: ICompany) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    try {
      await this._httpClient.put(API_URL, company, { headers }).toPromise();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Deletes company.
   *
   * @param {string} companyId
   * @returns {Promise<void>}
   */
  async deleteCompany(companyId: string) {
    try {
      await this._httpClient
        .delete(`${API_URL}/${companyId}`)
        .toPromise();
    } catch (error) {
      console.log(error);
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
   * Normalizes given company and initializes undefined
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
    }
  }
}
