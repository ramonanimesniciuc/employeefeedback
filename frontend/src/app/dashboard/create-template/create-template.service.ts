import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CreateTemplateService {

  constructor(private http: HttpService) { }

  public submitTemplate(template){
    return this.http.post('api/manager/add-template',template)
  }
}
