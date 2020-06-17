import { Component } from '@angular/core';
import {MapsService} from './maps.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  constructor(private map:MapsService){}
  ngOnInit()
  {
    // this.map.getLocation().subscribe(data =>{
    //   console.log(data);
    //   this.lat=data.results[0].geometry.location.lat;
    //   this.lng=data.results[0].geometry.location.lng;
    //   console.log(this.lat+" "+this.lng);
    //})
  }

 
}


