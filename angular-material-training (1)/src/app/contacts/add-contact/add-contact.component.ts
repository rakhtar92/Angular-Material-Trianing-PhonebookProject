import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Contacts } from '../../shared/contacts.model';
// import { GeoApiService } from '../../shared/geo-api.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  latitude: number;
  longitude: number;
  @ViewChild('contactName') cname: ElementRef;
  @ViewChild('contactNumber') cnum: ElementRef;
  @ViewChild('email') cemail: ElementRef;
  @ViewChild('address') caddress: ElementRef;
  // @ViewChild('country') ccountry: ElementRef;
  // @ViewChild('state') cstate: ElementRef;
  // @ViewChild('city') ccity: ElementRef;
  // @ViewChild('zipCode') czip: ElementRef;
  @ViewChild('organisation') corg: ElementRef;
  @ViewChild('designation') cdesg: ElementRef;
  @ViewChild('birthday') cbirthday: ElementRef;
  isFavourite: boolean = false;
  constructor(public dialogRef: MatDialogRef<AddContactComponent>, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }
  ngOnInit() { 
    this.latitude = 39.8282;
    this.longitude = -98.5795;
     this.getLat(this.caddress);
  }
  onSaveContacts() {
    this.dialogRef.close(
      {
        _name: this.cname.nativeElement.value,
        _number: this.cnum.nativeElement.value,
        _email: this.cemail.nativeElement.value,
        _address: this.caddress.nativeElement.value,
        // _street: this.cstreet.nativeElement.value,
        // _country: this.ccountry.nativeElement.value,
        // _state: this.cstate.nativeElement.value,
        // _city: this.ccity.nativeElement.value,
        // _postalCode: this.czip.nativeElement.value,
        _organisation: this.corg.nativeElement.value,
        _designation: this.cdesg.nativeElement.value,
        _birthday: this.cbirthday.nativeElement.value,
        _isFavourite: this.isFavourite,
        _latitude:this.latitude,
        _longitude:this.longitude
      }
    );
  }
  onCancel() {
    this.dialogRef.close();
  }
  getLat(addres: ElementRef) {
       this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(addres.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          console.log(this.latitude);
          console.log(this.longitude);
        });
      });
    });
   }
  // getLatitude(address:ElementRef){
  // let pl:google.maps.places.PlaceResult = this.getPlaces(address);
  // }
  // getLong(addres: ElementRef) {
  //   this.mapsAPILoader.load().then(() => {
  //     let autocomplete = new google.maps.places.Autocomplete(addres.nativeElement, {
  //       types: ['address']
  //     });
  //     autocomplete.addListener("PlaceChanged", () => {
  //       this.ngZone.run(() => {
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  //         if(place.geometry===undefined || place.geometry===null){
  //           return;
  //         }
  //         this.longitude = place.geometry.location.lng();
  //         console.log(this.longitude);
  //       });
  //     });
  //   });
  //   return this.longitude;
  // }
}