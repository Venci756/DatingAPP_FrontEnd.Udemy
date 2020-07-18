import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavComponent } from './nav/nav.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./_services/auth.service";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {ErrorInterceptorProvider} from "./_services/error.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    ErrorInterceptorProvider,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
