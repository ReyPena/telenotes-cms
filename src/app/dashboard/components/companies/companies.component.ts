import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from '../../interfaces/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  @Input() companies: ICompany[];

  constructor() { }

  ngOnInit() {
  }

}
