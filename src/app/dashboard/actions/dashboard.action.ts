import { Action } from '@ngrx/store';
import { ICompany } from '../interfaces/company';

export const enum DashboardTypes {
  FETCH_DATA = '[Dashboard] FetchData'
}

export class FetchData implements Action {
  readonly type = DashboardTypes.FETCH_DATA;
  payload: ICompany[];
}

export type DashboardActions = FetchData;
