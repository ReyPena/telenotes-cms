import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompanyService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  getAllData() {
    this._httpClient
      .get('http://devapp.telenotes.com/api/data/reynaldo')
      .toPromise();
  }

  updateRecord(body) {
    this._httpClient
      .put('http://devapp.telenotes.com/api/data/reynaldo', body)
      .toPromise();
  }

  async createRecord(body) {
    await this._httpClient
      .post('http://devapp.telenotes.com/api/data/reynaldo', body)
      .toPromise();
  }

  deleteRecord() {}
}
