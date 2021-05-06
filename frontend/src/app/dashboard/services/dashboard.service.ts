import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpService: HttpService) { }

  public addManager(managerInfo){
    return this.httpService.post('api/company/add-manager',managerInfo);
  }
}
