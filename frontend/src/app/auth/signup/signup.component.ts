import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 public signUpForm:FormGroup;
  constructor(private authService:AuthService,
    private router:Router,
    private notificationsService:NotificationsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      title: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      subscriptionType: new FormControl('',Validators.required)
    })
  }



  onSignUp(){
    return this.authService.signUpCompany(this.signUpForm.value).subscribe((success)=>{
      console.log('sign up company result',this.signUpForm.value);
      this.router.navigate(['/']);
      this.notificationsService.info('Now you can login!','A confirmation email has been sent',{timeOut:5000})
    });
  }

  onSelectedSubscription(selectedType){
    this.signUpForm.get('subscriptionType').setValue(selectedType);
  }

}
