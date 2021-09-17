import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../myAppInterface/auth-response-interface';
import { myconfig } from '../myconfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  signUp(emailReceived: any, passwordReceived: any)
  {
   return this._http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+myconfig.API_KEY,
    {
        email: emailReceived,
        password:passwordReceived,
        returnSecureToken : true
      })
  }
}
