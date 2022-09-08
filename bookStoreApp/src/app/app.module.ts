import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// const routes: Routes =[
//   {path:'about-us', component: AboutUsComponent}
// ]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  
   // AuthModule,
   // PublicModule,
   // UserModule,
   SharedModule,
   AppRoutingModule,
   BrowserAnimationsModule
  ],
 // exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
