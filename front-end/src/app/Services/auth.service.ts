import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:5275/api/auth/login';

  username : any ;
  sessionValue: boolean = false;

  islogin : boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {

    const loginData = { username: username, password: password };
    this.username = username ;

      this.sessionValue = Boolean(sessionStorage.getItem('islogin'));

    return this.http.post(this.apiUrl, loginData);
    
  }
}
