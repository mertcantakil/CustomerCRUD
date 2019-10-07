import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {RegistrationComponent} from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AuthGuard } from './auth/auth.guard';

const routes : Routes = [
  {path:'',redirectTo:'user/registration',pathMatch:'full'},
  {
    path:'user',component:UserComponent,
    children:[
      {path:'registration',component:RegistrationComponent},
      {path:'login',component:LoginComponent}
    ]
    
  },
  {path:'CustomerDetails',component:CustomerDetailsComponent, canActivate:[AuthGuard]}
];


@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
