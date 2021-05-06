import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import readXlsxFile from 'read-excel-file';
import { EmployeeUpload } from '../models/employee-upload.model';
import { AddEmployeesService } from './add-employees.service';
import * as moment from 'moment';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.scss']
})
export class AddEmployeesComponent implements OnInit {
  fileToUpload: File = null;
  public employees: EmployeeUpload[] = [];
  public existingUsersInDb: any[] = [];
  constructor(private addEmployeesService: AddEmployeesService,
    private notificationService: NotificationsService) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    readXlsxFile(files[0]).then((rows) => {
     console.log('rows',rows);
     if(rows && rows.length>0){
       rows.forEach((row)=>{
         this.employees.push(new EmployeeUpload({name:row[0],departmentId:row[1],enrollment:moment(new Date(Math.round((row[2] - 25569)*86400*1000))).format("MMM Do YYYY"),email:row[3],role:row[4],birthdate:moment(new Date(Math.round((row[5] - 25569)*86400*1000))).format("MMM Do YYYY"),password:'password',managerId:localStorage.getItem('id')}))
       })
     }
    })
}
  ngOnInit(): void {
  }


  addEmployees(){
   this.addEmployeesService.addEmployees({users:this.employees}).subscribe((success)=>{
   console.log('success',success)
   },(err)=>{
     console.log(err)
     let names = '';
     err.error.users.forEach((usr)=>{
       this.existingUsersInDb.push(usr);
       names = names + usr.name + ' ';
     })
    this.notificationService.error('Existing users in database',names,{timeOut:5000})
   })
  }

}
