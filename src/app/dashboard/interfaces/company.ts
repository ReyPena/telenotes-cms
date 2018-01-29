export interface ICompany {
  CompanyID?: number;
  AccountId?: number;
  CompanyName: string;
  StreetAddress: string;
  StreetAddress2: string;
  City: string;
  State: string;
  Country: string;
  ZipCode: string;
  webSite: string;
  CreatedDate: string;
  Contacts?: ICompany[];
  status: string;
  Type: string;
}
