import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }

  public goToSignUp(){
    this.router.navigate(['/signup']);
  }

  onLogin() {
    return this.authService
      .signIn(this.loginForm.value)
      .subscribe((result) => {
        if(result.accessToken){
          console.log('login result',result);
          localStorage.setItem('accessToken', result.accessToken);
          localStorage.setItem('access', result.type);
          localStorage.setItem('id',result.id);
          this.notificationsService.success('Hello, ' + result.username,null,{timeOut:3000})
          this.router.navigate(['/home'])
        }else{
          this.notificationsService.error('Ooops!Wrong credentials!')
        }

      });
  }
}
