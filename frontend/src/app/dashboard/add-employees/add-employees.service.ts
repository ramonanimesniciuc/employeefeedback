import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeesService {

  constructor(private http: HttpService) {

   }

   addEmployees(data){
   return this.http.post('api/manager/add-employees',data);
   }
}
