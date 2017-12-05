import { Component, OnInit } from '@angular/core';
import { Contacts } from '../shared/contacts.model';
import { ContactsService } from '../shared/contacts.service';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 
}
