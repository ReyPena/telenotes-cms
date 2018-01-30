import { Component, Input, OnInit } from '@angular/core';
import { IContact } from '../../interfaces';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input() contacts: IContact[];

  constructor() { }

  ngOnInit() {
  }

}
