import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contacts } from '../../shared/contacts.model';
import { ContactsService } from '../../shared/contacts.service';
// import { GeoApiService } from '../../shared/geo-api.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contactId: number;
  contact: Contacts;
  // public latitude: number;
  // public longitude: number;
  public zoom: number;

  constructor(private contactService: ContactsService, private route: Router, private thisRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.zoom = 20;
    // this.latitude = this.getLatitude(this.contactId);
    // this.longitude = this.getLongitude(this.contactId)
    this.thisRoute.params.subscribe(
      (params: Params) => {
        this.contactId = +params['id'];
        console.log(this.contactId);
        this.contact = this.contactService.getContactsById(this.contactId);
        // this.latitude = this.contact[this.contactId]._latitude;
        // this.longitude = this.contact[this.contactId]._longitude;
        console.log(this.contact);
      }
    );

  }
  // getLatitude(id:number){
  //   return this.contactService.getContactsById(id)._latitude;
  // }
  //   getLongitude(id:number){
  //   return this.contactService.getContactsById(id)._longitude;
  // }
  
}