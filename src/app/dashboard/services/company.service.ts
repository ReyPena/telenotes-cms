import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICompany } from '../interfaces/company';
import { environment } from '../../../environments/environment';

@Injectable()
export class CompanyService {
  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  apiUrl: string = environment.url;

  getAllData() {
    this._httpClient
      .get(this.apiUrl)
      .toPromise();
  }

  async updateCompany(company: ICompany) {
    try {
      await this._httpClient
        .post(this.apiUrl, company)
        .toPromise();
    } catch (error) {
      console.log(error);
    }

  }

  async createCompany(company: ICompany) {
    try {
      await this._httpClient
        .put(this.apiUrl, company)
        .toPromise();
    } catch (error) {
      console.log(error);
    }
  }

  async  deleteRecord(company) {
    try {
      await this._httpClient
        .delete(this.apiUrl, company)
        .toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
