import { Component, OnInit } from '@angular/core';
import { Contacts } from '../shared/contacts.model';
import { ContactsService } from '../shared/contacts.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  contacts: Contacts[] = [];
  popularContact: Contacts[] = [];
  isFavourite: boolean;
  constructor(private contactsService: ContactsService) { }
  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.contactsService.contactsChanged.subscribe(
      (contact: Contacts[]) => {
        this.contacts = contact;
      }
    )

  }
  onFavouriteDetails(index: number) {
    alert(this.contacts[index]._name + " " + this.contacts[index]._number);
  }
}
