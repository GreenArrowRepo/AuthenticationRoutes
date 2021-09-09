import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformsComponent } from "./MyMainContainer/Forms-modules/formsComponents/reactiveforms/reactiveforms.component";
import { TemplateDrivenComponent } from "./MyMainContainer/Forms-modules/formsComponents/template-driven/template-driven.component";
import { LoginComponent } from "./MyMainContainer/login/login.component";
import { PagenotfoundComponent } from "./MyMainContainer/pagenotfound/pagenotfound.component";

import { RoutingComponent } from "./MyMainContainer/routing/routing.component";


const appRoutes : Routes = [
    {path: '', redirectTo:'routing', pathMatch:'full'},
    {path: 'routing', component:RoutingComponent},
    {path: 'login', component:LoginComponent},
    {path: 'template-driven', component: TemplateDrivenComponent},
    {path: 'reactive', component: ReactiveformsComponent},
    {path: '**', component:PagenotfoundComponent}, 
  ]

@NgModule({
imports : [
  //eager loading and lazy loading
  RouterModule.forRoot(appRoutes)
],
exports: [RouterModule],
})

export class AppRoutingModule{}
