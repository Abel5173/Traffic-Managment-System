import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  constructor(private http : HttpClient) { }

  getdata (): Observable<IofficerData []>{

    return this.http.get<IofficerData[]>('http://localhost:5275/api/officer')
  }

}
export interface IofficerData {

    officer_id: number,
    fullname :string,
    phone_no : number,
    password : string,
    username : string
}