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
import { MembersListComponent } from './members-list/members-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    MembersListComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ErrorInterceptorProvider,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
