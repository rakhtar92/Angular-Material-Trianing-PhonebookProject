import { NgModule } from '@angular/core';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
import { ContcatListComponent } from './contacts/contact-list/contact-list.component';
import { PopularComponent } from './popular/popular.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { UpdateContactComponent } from './contacts/update-contact/update-contact.component';
// import{GeoApiService} from './shared/geo-api.service';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AppRoute } from './app-route.module';
import { RouterModule } from '@angular/router';
import { ContactsService } from './shared/contacts.service';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB82V-n6h_QB6jKvOQqT_9eR0EGxKNyVKw',
      libraries: ["places"]
    }),
    AppRoute
  ],
  declarations: [
    AppComponent, 
    ContactsComponent, 
    PopularComponent, 
    ContcatListComponent, 
    AddContactComponent, 
    ContactDetailsComponent, 
    UpdateContactComponent
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent],
  entryComponents: [AddContactComponent]
})
export class AppModule { }
