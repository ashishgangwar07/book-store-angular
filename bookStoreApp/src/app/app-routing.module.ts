
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
// import { AuthComponent } from "./auth/auth.component";
// import { LoginComponent } from "./auth/components/login/login.component";
// import { SignupComponent } from "./auth/components/signup/signup.component";

const routes: Routes=[
    {path:'', redirectTo:'about-us',pathMatch:'full'},
    {path:'about-us', component: AboutUsComponent},
   //{path:'**', component: NotFoundComponent},
    // {path:'auth', component:AuthComponent, children:[
    //     {path:'login', component:LoginComponent},
    //     {path:'signup', component:SignupComponent}
    // ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}