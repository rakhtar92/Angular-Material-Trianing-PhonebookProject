// // import{Injectable} from '@angular/core';
// // import { Http } from '@angular/http';
// // import {Observable} from 'rxjs';
// // // import 'rxjs/add/operator/map';
// // @Injectable()
// // export class GeoApiService{
// //   API_KEY:string;
// //   API_URL:string;
// //   constructor(private http:Http){
// //       this.API_KEY = 'AIzaSyB82V-n6h_QB6jKvOQqT_9eR0EGxKNyVKw';
// //       this.API_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB82V-n6h_QB6jKvOQqT_9eR0EGxKNyVKw&sensor=true&address='
// //   }
// //   findFromAddress(address: string, postalCode?: string, place?: string, province?: string, region?: string, country?: string):Observable<any>{
// //       let compositeAdddress = [address];
// //     if(postalCode){
// //       compositeAdddress.push(postalCode);
// //     }
// //     if(place){
// //       compositeAdddress.push(place);
// //     }
// //     if(province){
// //       compositeAdddress.push(province);
// //     }
// //     if(region){
// //       compositeAdddress.push(region)
// //     }
// //     if(country){
// //       compositeAdddress.push(country);
// //     }
// //     let url = `${this.API_URL}${compositeAdddress.join(',')}`
// //     return this.http.get(url).map(response=><any>response.json());
// //   }
// // }

// import { OnInit, Injectable, NgZone, ElementRef } from '@angular/core';
// import { AgmCoreModule, MapsAPILoader } from '@agm/core';



// @Injectable()
// export class GeoApiService implements OnInit {
//   latitude:number;
//   longitude:number;
//   constructor(
//     private mapsAPILoader: MapsAPILoader,
//     private ngZone: NgZone) {
//   }
//   ngOnInit() {
//   }
//   public loadMap(searchElementRf: ElementRef,zoom:number) {
//     this.mapsAPILoader.load().then(() => {
//       let autoComplete = new google.maps.places.Autocomplete(searchElementRf.nativeElement, { types: ["address"] });
//       autoComplete.addListener("place_changed", () => {
//         this.ngZone.run(() => {
//           let place: google.maps.places.PlaceResult = autoComplete.getPlace();
//           if(place.geometry===undefined || place.geometry===null){
//             return;
//           }
//           this.latitude = place.geometry.location.lat();
//           this.longitude = place.geometry.location.lng();
//           zoom = 12;
//         });
//       });
//     });
//   }
//   public setCurrentLocation(latitude:number, longitude:number, zoom:number){
// if("geolocation" in navigator){
//   navigator.geolocation.getCurrentPosition((position)=>{
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//     zoom = 12;
//   });
// }
//   }
// }





