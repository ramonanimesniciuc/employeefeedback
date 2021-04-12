import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/common/services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 public signUpForm:FormGroup;
  constructor(private http:HttpService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      title: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      subscriptionType: new FormControl('',Validators.required)
    })
  }

  signup(){
  return this.http.post('api/auth/signupcompany',this.signUpForm.value);
  }

  onSignUp(){
    return this.signup().subscribe((success)=>{
      console.log(success)
    });
  }

  onSelectedSubscription(selectedType){
    this.signUpForm.get('subscriptionType').setValue(selectedType);
  }

}
