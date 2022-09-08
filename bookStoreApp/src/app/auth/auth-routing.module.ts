import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './auth.component';


const routes: Routes=[
  {path:'auth', component:AuthComponent, children:[
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent}
]}
]
@NgModule({
  declarations: [],
   imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  
})
export class AuthRoutingModule { }