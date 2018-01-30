import { IContact } from './contact';

/**
 * Contract for contact dictionary.
 * Collection of contacts that belong to a company id.
 */
export interface IContactDictionary {
  [companyId: string]: IContact[];
}
