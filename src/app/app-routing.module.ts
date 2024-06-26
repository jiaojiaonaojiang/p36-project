import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {StaffhomeComponent} from "./staffhome/staffhome.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ac_home', component: StaffhomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to log in by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
