import { Router, Routes, RouterModule } from '@angular/router';
import { PopularComponent } from './popular/popular.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { UpdateContactComponent } from './contacts/update-contact/update-contact.component';
import{ContcatListComponent} from './contacts/contact-list/contact-list.component';
const appRoute: Routes = [
    {
    path: '',
    redirectTo:'/contact-list',
    pathMatch:'full'
  },
  {
    path: 'popular',
    component: PopularComponent
  },
  {
    path:'contact-list',
    component:ContcatListComponent
  },
  {
    path: 'contact',
    component: ContactsComponent,
    children: [
      {
        path: ':id',
        component: ContactDetailsComponent,
        children: [
          {
            path: ':id/edit',
            component: UpdateContactComponent
          }
        ]
      }

    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoute {
  constructor() { }

}