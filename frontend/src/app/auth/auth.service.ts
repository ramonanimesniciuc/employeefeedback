import { Injectable } from "@angular/core";
import { HttpService } from "../common/services/http.service";

@Injectable({providedIn:'root'})
export class AuthService {
    constructor(private httpService:HttpService){}


    public signIn(loginBody){
       return this.httpService.post('api/auth/signin',this.signIn);
    }

    public signUpCompany(signUpBody){
        return this.httpService.post('api/auth/signupcompany',signUpBody);
     }
}