import { IDashboardState } from '../interfaces/dashboard-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardActions, DashboardTypes } from '../actions/dashboard.action';

/**
 * Initial state.
 * @type {{companies: ICompany[]}}
 */
const initialState: IDashboardState = {
  companies: []
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
        companies: payload
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
