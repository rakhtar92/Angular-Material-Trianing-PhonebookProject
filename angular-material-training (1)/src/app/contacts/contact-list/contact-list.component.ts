import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../shared/contacts.model';
import { ContactsService } from '../../shared/contacts.service';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { UpdateContactComponent } from '../update-contact/update-contact.component';
import{Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContcatListComponent{
 contacts: Contacts[] = [];
  onSelected: number;
  onDeselect: boolean = true;
  constructor(private contacctsService: ContactsService, public mtDialog: MatDialog, private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.contacts = this.contacctsService.getContacts();
    this.contacctsService.contactsChanged.subscribe(
      (contact: Contacts[]) => {
        this.contacts = contact;
        console.log(this.contacts);
      }
    )
  }
  // onDisplayContacts(index:number){
  //   this.route.navigate(['/contact/index'])
  // }
  showDeletButton(index: number) {
    this.onSelected = index;
    this.onDeselect = !this.onDeselect;
    console.log("From Service ", this.contacts[index]);
    console.log(this.onSelected);
  }
  onAddContacts() {
    let dialogRef = this.mtDialog.open(AddContactComponent, { width: '900px', height: '500px' });
    dialogRef.afterClosed().subscribe(
      contact => {
        if (contact) {
          this.contacctsService.saveContacts(contact);
        }
        else {
          return false;
        }
        console.log(contact);
      }
    );
  }
  onDelete(index: number) {
    this.contacctsService.deleteContacts(index);
  }
  onUpdateFavourite(index: number, fav: boolean) {
    this.contacctsService.updateFavourite(index, fav);
  }
  onUpdateContact(index: number, contact: Contacts) {
    this.contacctsService.updateContact(index, contact);
  }
  onOpenEditDialog(index: number) {
    let dialogRef = this.mtDialog.open(UpdateContactComponent, { width: '250px', height: '350px' });
    dialogRef.afterClosed().subscribe(
      contact => {
        if (contact) {
          this.contacctsService.updateContact(index, contact);
        }
        else{
          return false;
        }
      }
    );
  }
  onOpenDisplayDialog(index: number) {
    alert("Contact Details: " + this.contacts[index]._name + " " + this.contacts[index]._number);
  }
}