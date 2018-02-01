import { IContact } from './contact';

/**
 * Contract for a contacts.
 */
export interface ICompany {
  /**
   * The contacts id.
   * @type {number | null}
   */
  CompanyID: number | null;

  /**
   * Account id.
   * @type {string}
   */
  AccountId: string;

  /**
   * Company name.
   * @type {string}
   */
  CompanyName: string;

  /**
   * Company main street address.
   * @type {string}
   */
  StreetAddress: string;

  /**
   * Company main street address line 2.
   * @type {string}
   */
  StreetAddress2?: string;

  /**
   * City
   * @type {string}
   */
  City: string;

  /**
   * City
   * @type {string}
   */
  State: string;

  /**
   * Country
   * @type {string}
   */
  Country: string;

  /**
   * ZipCode
   * @type {string}
   */
  ZipCode: string;

  /**
   * Company website.
   * TODO: Should use angular url sanitizer service.
   * For now, just trust it for this dev test project.
   */
  webSite?: string;

  /**
   * Created date.
   * TODO: Update api or talk to api team to use a Date vs any string.
   * @type {string}
   */
  CreatedDate: string;

  /**
   * Optional, used to post to api but not in the actual store.
   * TODO: Separate api and redux interfaces. Good enough as is for this dev test though.
   * @type {IContact[]}
   */
  Contacts?: IContact[];

  /**
   * Company status.
   * @type {string}
   */
  status: string;

  /**
   * Company Type.
   * @type {string}
   * TODO: Change to enum if API provides known set types and not a string.
   */
  Type: string;
}
