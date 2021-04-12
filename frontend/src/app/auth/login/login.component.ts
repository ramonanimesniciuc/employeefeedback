import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/common/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private http: HttpService,
    private formBuilder: FormBuilder) {

     }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
    this.onLogin().subscribe(result=>{
      console.log('hello');
    })
  }

  login(loginInfo){
  return this.http.post('api/auth/signin');
  }

  onLogin(){
    return this.login({username:'user',password:'pass'});
  }

}
