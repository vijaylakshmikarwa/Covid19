import { Component, OnInit } from '@angular/core';
import{AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  description="Covid19";

  details:Observable<Details[]>;
  query:string;
  comment:string;
  postcomment=[];
  //details:[];
  DetailedDescription:string;
  key:string;
  email:string;
  category:string;
  listing:string;
  location:string;
  locationnew:string;
  latitude:string;
  longitude:string;
  comments:string;
  currentUser:any;
  comment_Post:Observable<Comments[]>;
  myObj:any;
  user:string;
obj:any;
postDetails=[];
comments_post=[];
  constructor(public db:AngularFireDatabase,public router:ActivatedRoute,public afs:AngularFirestore,public route:Router,private http:HttpClient) {
   }

  ngOnInit(): void {
    var postDetails=[];
    var params=[];
    var lat;
    var long;

    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
     this.user = this.currentUser.user;
    this.router.queryParams.subscribe((data=>{
    this.query=data['val'];
    if(this.query!=null)
    {
    params=this.query.split(" ");
    lat = params[0];
    long =params[1];
    }

    }));


      if(this.query!=undefined)
      {
  
        this.db.object('Details').valueChanges().subscribe((data=>
          {
           var keys =Object.keys(data);
           this.myObj=data;
           for(var i=0;i<keys.length;i++)
           {
             var k=keys[i];
             this.key=k;
             this.latitude=this.myObj[k].latitude;
             this.longitude=this.myObj[k].longitude;
             this.listing= this.myObj[k].listing;
             this.location = this.myObj[k].location;
             this.DetailedDescription=this.myObj[k].DetailedDescription;
            if(this.latitude==lat && this.longitude==long)
             {
               this.comment_Post=this.db.list('Comments').valueChanges();
               this.comment_Post.subscribe((data=>
                {
                  data.forEach((val)=>
                  {

                      if(val.id == k)
                      {
                        this.comments_post.push(val.comment);
                        
                      }
                        

                  })
                }))

                var obj={
                  "id":k,
                  "DetailedDescription":this.DetailedDescription,
                  "listing":this.listing,
                  "location":this.location,
                  "comments":this.comments_post,
                  "email":this.email
                }
                this.postDetails.push(obj);
           
           }
          
           }

         

        
    })); 

    }
    else
    {

      this.db.object('Details').valueChanges().subscribe((data=>
        {
         var keys =Object.keys(data);
         this.myObj=data;
         for(var i=0;i<keys.length;i++)
         {
           var k=keys[i];
           this.key=k;
           this.latitude=this.myObj[k].latitude;
           this.longitude=this.myObj[k].longitude;
           this.listing= this.myObj[k].listing;
           this.location = this.myObj[k].location;
           this.email=this.myObj[k].email;
           this.DetailedDescription=this.myObj[k].DetailedDescription;
          if(this.user==this.email)
           {
             this.comment_Post=this.db.list('Comments').valueChanges();
             this.comment_Post.subscribe((data=>
              {
                data.forEach((val)=>
                {

                    if(val.id == k)
                    {
                      this.comments_post.push(val.comment);
                      
                    }
                      

                })
              }))

              var obj={
                "id":k,
                "DetailedDescription":this.DetailedDescription,
                "listing":this.listing,
                "location":this.location,
                "comments":this.comments_post,
                "email":this.email
              }
              this.postDetails.push(obj);
        
         
         }
        
         }

       

      
  })); 



    }



  }
  
  post(id:String,e:string)
  {
    var obj = {
        "id":id,
        "comment":this.comment
    };
    console.log(obj);
    this.db.list('Comments').push(obj);
    const email = this.user;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/mpzylpjq',
      {replyto: email, message:this.comment},
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }

  SignOut()
{
  localStorage.removeItem;
  this.route.navigate(['login']);
}


}

interface Details
{
    $key:string;
    DetailedDescription?:string;
    category?:string;
    comments?:string;
    email?:string;
    latitude?:string;
    listing?:string;
    location?:string;
    longitude?:string;
}

interface Comments{
  comment?:string;
  id?:string;
}
