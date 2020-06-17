import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forms = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  });
  email:string;
  password:string;

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.email= this.forms.get('email').value;
    this.password = this.forms.get('password').value;
    this.auth.login(this.email,this.password);
    localStorage.setItem('currentUser',JSON.stringify({user:this.email}));
    this.email=this.password=' ';
  }


}
