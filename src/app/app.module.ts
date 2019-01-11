import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AboutService } from './about.service';
import {RouterModule, Routes} from '@angular/router';
import { SearchImageComponent } from './search-image/search-image.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes : Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'images', component: SearchImageComponent },
  { path: '', pathMatch: 'full', redirectTo: '/about' }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    SearchImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
