import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
   {path:'login',component:LoginComponent},
   {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'',
   redirectTo:'/login',
   pathMatch:"full"
  },
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
