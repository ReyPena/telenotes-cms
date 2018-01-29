import { IDashboardState } from '../interfaces/dashboard-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardActions, DashboardTypes } from '../actions/dashboard.action';

const initialState: IDashboardState = {
  companies: [
    {
      'CompanyID': 8037691,
      'AccountId': null,
      'CompanyName': 'A&S Supply',
      'StreetAddress': '583 School Street',
      'StreetAddress2': '',
      'City': 'West New York',
      'State': 'NJ',
      'Country': '',
      'ZipCode': '07093',
      'webSite': '',
      'CreatedDate': '2015-12-10T08:43:57.313',
      'status': 'Not Defined',
      'Type': 'Miscellaneous'
    },
    {
      'CompanyID': 8037692,
      'AccountId': null,
      'CompanyName': 'A+ Electric - Branch 1',
      'StreetAddress': '283 New Street',
      'StreetAddress2': '',
      'City': 'Wantagh',
      'State': 'NY',
      'Country': '',
      'ZipCode': '11793',
      'webSite': 'hello.com',
      'CreatedDate': '2015-12-10T08:43:57.540',
      'status': 'Not Defined',
      'Type': 'Not Defined'
    }
  ]
};

export function dashboard(state = initialState, action: DashboardActions): IDashboardState {
  switch (action.type) {
    // case DashboardTypes.FETCH_DATA:
    //   return { ...state, companies: action.payload };
    default:{
      return state;
    }
  }
}

export const dashboardState = createFeatureSelector<IDashboardState>('dashboard');

export const getCompaniesState = (state: IDashboardState) => state.companies;

export const getCompanies = createSelector(dashboardState, getCompaniesState);
