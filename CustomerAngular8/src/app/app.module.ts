import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDetailComponent } from './customer-details/customer-detail/customer-detail.component';
import { CustomerDetailListComponent } from './customer-details/customer-detail-list/customer-detail-list.component';
import { CustomerDetailService } from './shared/customer-detail.service';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UserService } from './shared/user.service';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerDetailComponent,
    CustomerDetailListComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    AppRoutingModule,
    RouterModule

  ],
  providers: [CustomerDetailService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
