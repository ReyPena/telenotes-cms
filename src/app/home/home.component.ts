import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  companies = [];
  company = {};

  ngOnInit() {
  }

  addItem() {
    this.companies.push(this.company);
    this.company = {};
    console.log(this.companies);
  }

}
