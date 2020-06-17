import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {

 selectedMarker: Marker;
 lat:string ='';
 lng:String='';
 query:string;
 masks:string;
 selection:string;
 details:Observable<Details[]>;
 locations =  [];
// latitude:string;
// longitude:string;
  constructor(public dialogRef: MatDialogRef<MapListComponent>,@Inject(MAT_DIALOG_DATA) public data:any,public router:Router,public db:AngularFireDatabase) { }

  ngOnInit(): void {
    this.selection=this.data.selection;
    this.masks=this.data.masks;

    this.details=this.db.list('Details').valueChanges();
    this.details.subscribe((data=>
      {
        console.log(this.data);
        data.forEach((val)=>
        {
          if(val.category!=this.selection && val.listing==this.masks)
          {
            this.lat=val.latitude.toString();
            this.lng=val.longitude.toString();
            var obj={
             "lat":this.lat,
             "lng":this.lng
            };
            this.locations.push(obj);
          }
         
          
        })
      }));

      console.log(this.locations);

  }


  selectMarker(event) {
    this.dialogRef.close();
    this.selectedMarker = {
        latitude: event.latitude,
        longitude: event.longitude
    }
    this.query=this.selectedMarker.latitude.toString()+" "+this.selectedMarker.longitude.toString();
    //console.log(this.query);
    this.router.navigate(['profile'],{queryParams:{val:this.query}});
    

}



onBack()
{
  this.dialogRef.close();
}

}

interface Marker {
  latitude: number;
  longitude: number;
}

interface Details
{
    DetailedDescription?:string;
    category?:string;
    comments?:string;
    email?:string;
    latitude?:string;
    listing?:string;
    location?:string;
    longitude?:string;
}
