import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Location, Appearance, GermanAddress} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { MapsAPILoader } from '@agm/core';
import { MapsService } from '../maps.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import{AngularFirestore} from '@angular/fire/firestore';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  formattedAdrress='';
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
    
        public handleAddressChange(address: any) {
          this.formattedAdrress=address.formatted_address;
        // Do some stuff
    }

  selectedValue:string;
  selected:string;

  serviceform = new FormGroup({
    Email: new FormControl('', [
      Validators.required
    ]),
    DetailedDescription: new FormControl('', [
      Validators.required
    ]),
    Location: new FormControl('', [
      Validators.required
    ]),
    Category: new FormControl('', [
      Validators.required
    ]),
    Listing: new FormControl('', [
      Validators.required
    ])

  });
  DetailedDescription:string;
  email:string;
  category:string;
  listing:string;
  location:string;
  splitlocation:string[];
  locationnew:string;
  latitude:string;
  longitude:string;
  PostID:number=0;

  constructor(public dialogRef: MatDialogRef<PostComponent>,@Inject(MAT_DIALOG_DATA) public data:any,
    private map:MapsService,public db:AngularFireDatabase, public router: Router,public firestore:AngularFirestore) { }

  ngOnInit() {
    
  }

onSubmit()
{
  this.email=this.serviceform.get('Email').value;
    this.DetailedDescription=this.serviceform.get('DetailedDescription').value;
    this.category=this.serviceform.get('Category').value;
    this.listing=this.serviceform.get('Listing').value;
    this.location=this.formattedAdrress;
    this.splitlocation=this.location.split(",");
    console.log(this.PostID);
      this.map.getLocation(this.location).subscribe(data =>{
        console.log(data);
        this.latitude=data.results[0].geometry.location.lat;
        this.longitude=data.results[0].geometry.location.lng;
        console.log(this.longitude+" "+this.latitude);

    });
  
      setTimeout(()=>{
        var detailsvalue={
          "category":this.category,
          "listing":this.listing,
          "email":this.email,
          "DetailedDescription":this.DetailedDescription,
          "location":this.location,
           "latitude":this.latitude,
           "longitude":this.longitude
          
  
        }
  
        console.log(detailsvalue);
        this.db.list('Details').push(detailsvalue);
  
        this.dialogRef.close();


      },3000);
     

}

onCancel()
{
  this.dialogRef.close();
}





}
