import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { StudHomeComponent } from './stud-home/stud-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AcProfileComponent } from './ac-profile/ac-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StaffhomeComponent,
    StudHomeComponent,
    AdminHomeComponent,
    AcProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
