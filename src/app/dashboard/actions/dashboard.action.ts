import { Action } from '@ngrx/store';
import { ICompany } from '../interfaces/company';

/**
 * Dashboard action identifiers.
 */
export const enum DashboardTypes {
  SET_COMPANIES = '[Dashboard] Set Companies'
}

/**
 * Sets companies in redux store.
 */
export class SetCompanies implements Action {
  /**
   * Action type.
   * @type {DashboardTypes.SET_COMPANIES}
   */
  readonly type = DashboardTypes.SET_COMPANIES;

  /**
   * Constructs instance of @see {@link SetCompanies}
   * @param {ICompany[]} payload
   */
  constructor(public payload: ICompany[]) {}
}

/**
 * Dashboard action types.
 */
export type DashboardActions = SetCompanies;
