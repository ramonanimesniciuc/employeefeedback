import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../common/shared.module';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[LoginComponent,SignupComponent]
})
export class AuthModule { }
