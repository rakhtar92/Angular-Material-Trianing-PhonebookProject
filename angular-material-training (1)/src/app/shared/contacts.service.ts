import{Injectable} from '@angular/core';
import { Contacts } from './contacts.model';
import { Subject } from 'rxjs/Subject';
// import{GeoApiService} from './geo-api.service';
// @Injectable()
export class ContactsService {
  contactsChanged = new Subject<Contacts[]>();
  private contacts: Contacts[] = [
    new Contacts("test1","353453423424","dsfdsf","fdkshkfj","fdsfsfs","fsfdsfsf","sfsfdfdsf","234324234","ewfsdfsdf","dfsdfsd",true,"42342334",342342,432423424),
 new Contacts("test1","353453423424","dsfdsf","fdkshkfj","fdsfsfs","fsfdsfsf","sfsfdfdsf","234324234","ewfsdfsdf","dfsdfsd",true,"42342334",342342,432423424),
  new Contacts("test1","353453423424","dsfdsf","fdkshkfj","fdsfsfs","fsfdsfsf","sfsfdfdsf","234324234","ewfsdfsdf","dfsdfsd",true,"42342334",342342,432423424),
   new Contacts("test1","353453423424","dsfdsf","fdkshkfj","fdsfsfs","fsfdsfsf","sfsfdfdsf","234324234","ewfsdfsdf","dfsdfsd",true,"42342334",42342,432423424),

  ];
//  latitude:string;
 // longitude:String;
// constructor(private geoApiService: GeoApiService){

// }
  getContacts() {
    return this.contacts.slice();
  }
  getContactsById(index: number) {
    return this.contacts[index];
  }
  getFavourite(index: number) {
    return this.contacts[index]._isFavourite;
  }
  saveContacts(contact: Contacts) {
    this.contacts.push(contact);
    this.contactsChanged.next(this.contacts.slice());
  }
  deleteContacts(index: number) {
    this.contacts.splice(index, 1);
    this.contactsChanged.next(this.contacts.slice());
  }
  updateFavourite(index: number, fav: boolean) {
    if (fav === true) {
      this.contacts[index]._isFavourite = fav;
      console.log(fav);
      this.contactsChanged.next(this.contacts.slice());
    }
    else {
      this.contacts[index]._isFavourite = fav;
      this.contactsChanged.next(this.contacts.slice());
    }
  }
  updateContact(index: number, contact: Contacts) {
    this.contacts[index] = contact;
    this.contactsChanged.next(this.contacts.slice());
  }

}