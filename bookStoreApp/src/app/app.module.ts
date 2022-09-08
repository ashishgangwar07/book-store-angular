import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { AboutUsComponent } from './about-us/about-us.component';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

// const routes: Routes =[
//   {path:'about-us', component: AboutUsComponent}
// ]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   //RouterModule.forRoot(routes)
   AppRoutingModule,
   AuthModule,
   PublicModule,
   UserModule,
   SharedModule
  ],
 // exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
