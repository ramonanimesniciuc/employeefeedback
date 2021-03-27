import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { ManagerModule } from './manager/manager.module';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from './common/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ManagerModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule]
})
export class AppModule { }
