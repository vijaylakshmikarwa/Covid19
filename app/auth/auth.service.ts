import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>;

  constructor(
    public afAuth :AngularFireAuth,
    public router: Router
  ) { }

    signup(email:string,password:string)
    {
      this.afAuth.createUserWithEmailAndPassword(email,password).then(
        value =>{
          console.log('Success!',value);
          this.router.navigate(['home']);
        }
      ).catch(err =>{
        console.log('Something Went Wrong',err);
      })
    }
    login(email:string,password:string)
    {
      this.afAuth.signInWithEmailAndPassword(email,password).then(
        value =>{
          console.log('Success!',value);
          localStorage.setItem('currentUser',JSON.stringify({user:email}));
          this.router.navigate(['home']);
        }
      ).catch(err =>{
        console.log('Something Went Wrong',err);
      })
    }
}
