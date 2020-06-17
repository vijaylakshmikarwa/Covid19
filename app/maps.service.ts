import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RootObject} from './Location';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  public location:any;
  constructor(private http:HttpClient) { }

  getLocation(locationAddress:string)
  {
    console.log(locationAddress);
    return this.http.get<RootObject>('https://maps.googleapis.com/maps/api/geocode/json',{
      params:{
        address:locationAddress,
        key:'AIzaSyBQQ-m7o8PyI-yMU_w6iHKY2R9Y6bd9O9w'
      }
    });
   
      
  }
}
