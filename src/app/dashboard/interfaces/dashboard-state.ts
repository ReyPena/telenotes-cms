import { ICompany } from './company';
import { IContactDictionary } from './contact-dictionary';

/**
 * Contract for dashboard state piece in redux store.
 */
export interface IDashboardState {
  /**
   * The collection of companies.
   * @type {ICompany[]}
   */
  companies: ICompany[];

  /**
   * Dictionary of companyId, contact collection pairs.
   * @type {IContactDictionary}
   */
  contacts: IContactDictionary;
}
