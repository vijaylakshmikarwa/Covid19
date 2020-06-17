import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ProfileComponent } from './profile/profile.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { PostComponent } from './post/post.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MapListComponent } from './map-list/map-list.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    PostComponent,
    MapListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    GooglePlaceModule,
    MatCheckboxModule,
    MatButtonModule,
    NgbModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatBadgeModule,
   MatListModule,
   MatGridListModule,
   MatFormFieldModule,
   MatInputModule,
   MatRadioModule,
   MatDatepickerModule,
   MatChipsModule,
   MatTooltipModule,
   MatTableModule,
   MatPaginatorModule,
   MatDialogModule,
   MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQQ-m7o8PyI-yMU_w6iHKY2R9Y6bd9O9w'
    }),
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot()  
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule
 ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[PostComponent]
})
export class AppModule { }
