import { ICompany, IContact, IContactDictionary, IDashboardState } from '../interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardActions, DashboardTypes } from '../actions';

/**
 * Initial state.
 * @type {{companies: ICompany[]}}
 */
const initialState: IDashboardState = {
  companies: [],
  contacts: {}
};

/**
 * Dashboard reducer function.
 *
 * @param {IDashboardState} state
 * @param {DashboardActions} action
 * @returns {IDashboardState}
 */
export function dashboard(
  state = initialState,
  action: DashboardActions
): IDashboardState {
  const { type, payload } = action;

  switch (type) {
    case DashboardTypes.SET_COMPANIES: {
      return {
        ...state,
        companies: payload as ICompany[]
      };
    }
    case DashboardTypes.SET_CONTACTS: {
      return {
        ...state,
        contacts: payload as IContactDictionary
      };
    }
    default: {
      return state;
    }
  }
}

/**
 * Feature selector for dashboard state piece.
 * @type {MemoizedSelector<object, IDashboardState>}
 */
export const dashboardState = createFeatureSelector<IDashboardState>('dashboard');

/**
 * Getter for company state piece from dashboard state.
 *
 * @param {IDashboardState} state
 * @returns {ICompany[]}
 */
export const getCompaniesState = (state: IDashboardState) => state.companies;

/**
 * Creates selector for companies state piece.
 * @type {MemoizedSelector<object, ICompany[]>}
 */
export const getCompanies = createSelector(dashboardState, getCompaniesState);
