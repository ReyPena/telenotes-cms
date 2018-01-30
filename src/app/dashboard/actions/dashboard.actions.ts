import { Action } from '@ngrx/store';
import { ICompany } from '../interfaces';
import { IContactDictionary } from '../interfaces';

/**
 * Dashboard action identifiers.
 */
export const enum DashboardTypes {
  SET_COMPANIES = '[Dashboard] Set Companies',
  SET_CONTACTS = '[Dashboard] Set Contacts'
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
 * Sets contacts dictionary in redux store.
 */
export class SetContacts implements Action {
  /**
   * Action type.
   * @type {DashboardTypes.SET_CONTACTS}
   */
  readonly type = DashboardTypes.SET_CONTACTS;

  /**
   * Constructs instance of @see {@link SetContacts}
   * @param {IContactDictionary} payload
   */
  constructor(public payload: IContactDictionary) {}
}

/**
 * Dashboard action types.
 */
export type DashboardActions = SetCompanies | SetContacts;
