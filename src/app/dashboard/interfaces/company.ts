import { IContacts } from './contacts';

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
  Contacts?: IContacts[];
  status: string;
  Type: string;
}
