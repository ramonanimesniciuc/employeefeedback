import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss'],
})
export class AddManagerComponent implements OnInit {
  public addManagerForm: FormGroup;
  public accessRights: string[] = [];
  constructor(private formBuilder: FormBuilder,
    private dashboardService: DashboardService,
    private notificationsService: NotificationsService
    )
   {}

  ngOnInit(): void {
    this.addManagerForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      department: new FormControl('', Validators.required),
      access: new FormControl('', Validators.required),
      companyId: new FormControl(localStorage.getItem('id')),
      password: new FormControl('password')
    });
  }
  public onSelectionChanged($ev) {
    console.log('selection changed', $ev);
    if (this.accessRights.indexOf($ev) === -1) {
      this.accessRights.push($ev);
    } else {
      this.accessRights.splice(this.accessRights.indexOf($ev), 1);
    }
    this.addManagerForm.get('access').setValue(this.accessRights.toString());
  }

  public addManager() {
   this.dashboardService.addManager(this.addManagerForm.value).subscribe((result)=>{
     if(result.success){
      this.notificationsService.success('Manager added successfully!',null,{timeOut:4000});
      this.accessRights = [];
      this.addManagerForm.reset();
     }else{
       this.notificationsService.error('Something went wrong!Please try again latter!',null,{timeOut:4000})
     }
   })
  }

  public generatePassword() {
    const length = 8;
    const  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let  retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log('pass',retVal);
    return retVal;
}
}
