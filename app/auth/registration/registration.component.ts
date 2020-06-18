import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  forms = new FormGroup({
    email:new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
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
    this.auth.signup(this.email,this.password);
    this.email=this.password=' ';
  }

}
