import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyMainContainerComponent } from './MyMainContainer/MyMainContainer.component';

import { HeaderComponent } from './MyMainContainer/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingComponent } from './MyMainContainer/routing/routing.component';
import { LoginComponent } from './MyMainContainer/login/login.component';
import { PagenotfoundComponent } from './MyMainContainer/pagenotfound/pagenotfound.component';

import {HttpClientModule} from '@angular/common/http';
import { HeaderLinksComponent } from './MyMainContainer/header-links/header-links.component';
import { AppRoutingModule } from './app.routing.module';

import { ReactiveformsComponent } from '../app/MyMainContainer/Forms-modules/formsComponents/reactiveforms/reactiveforms.component';
import { TemplateDrivenComponent } from '../app/MyMainContainer/Forms-modules/formsComponents/template-driven/template-driven.component';
import { RouterModule } from '@angular/router';
import { LoginModule } from './MyMainContainer/login/login/login.module';
import { ManageProductsComponent } from './manage-products/manage-products/manage-products.component';


@NgModule({
  declarations: [
    AppComponent,
    MyMainContainerComponent,
    HeaderComponent,
    RoutingComponent,
    LoginComponent,
    PagenotfoundComponent,
    HeaderLinksComponent,
    TemplateDrivenComponent,
    ReactiveformsComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    LoginModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor()
  {
    console.log("app module loaded.")
  }
}
