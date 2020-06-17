import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';
import{AngularFireDatabase} from '@angular/fire/database';
import{AngularFirestore} from '@angular/fire/firestore';
import {Observable } from 'rxjs';
import{map} from 'rxjs/operators';
import { MapListComponent } from '../map-list/map-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterdata:any[];
  details:Observable<Details[]>;
  alldetails:Details[];
  lati:string;
  masks='Masks';
  query:string;

  lat:string ='';
  lng:String='';
  locations =  [];
  selectedMarker: Marker;
  isChecked = false;

  selectedValue:string;
  values:any;

  constructor(private dialog:MatDialog,public db:AngularFireDatabase,public angularfirestore:AngularFirestore,public router:Router) { }

  ngOnInit(): void {

    this.details=this.db.list('Details').valueChanges();
    this.details.subscribe((data=>
      {
        data.forEach((val)=>
        {
          this.lat=val.latitude.toString();
          this.lng=val.longitude.toString();
          var obj={
           "lat":this.lat,
           "lng":this.lng
          };
          this.locations.push(obj);
        })
      }));
      //console.log(this.locations);
   
  }
  selectMarker(event) {
    this.selectedMarker = {
        latitude: event.latitude,
        longitude: event.longitude
    }
    this.query=this.selectedMarker.latitude.toString()+" "+this.selectedMarker.longitude.toString();
    this.router.navigate(['profile'],{queryParams:{val:this.query}});
    

}

onPost()
{
  const dialogConfig= new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width="60%";
  this.dialog.open(PostComponent,dialogConfig);
}


onUpdate()
{

  
  if(!this.isChecked)
    {


      this.dialog.open(MapListComponent,
        {
          width:'900px',
          height:'700px',
          data:{
            masks:this.masks,
            selection:this.selectedValue
          }

        });
     
    }
}

SignOut()
{
  localStorage.removeItem;
  this.router.navigate(['login']);
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
