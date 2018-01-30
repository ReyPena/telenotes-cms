import { IContact } from './contact';

/**
 * Contract for a company.
 */
export interface ICompany {
  CompanyID: number | null;
  AccountId: string;
  CompanyName: string;
  StreetAddress: string;
  StreetAddress2?: string;
  City: string;
  State: string;
  Country: string;
  ZipCode: string;
  webSite?: string;
  CreatedDate: string;

  /**
   * Optional, used to post to api but not in the actual store.
   * TODO: Separate api and redux interfaces.
   * @type {IContact[]}
   */
  Contacts?: IContact[];

  status: string;
  Type: string;
}
