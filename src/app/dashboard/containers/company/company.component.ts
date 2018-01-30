import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getContacts } from '../../reducers/dashboard.reducer';
import { IDashboardState } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company: number;
  contacts: any = [];

  constructor(private readonly _store: Store<IDashboardState>,
              private readonly _route: ActivatedRoute) {
  }

  /**
   * Lifecycle hook.
   */
  ngOnInit() {
    this._route.params.subscribe((params) =>{
      this.company = params['id'];
    });

    this._store.select(getContacts)
      .subscribe((contactsState) => {
        this.contacts = contactsState[this.company];
      });
  }

}
