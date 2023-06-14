import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IofficerData } from './officer.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http : HttpClient) { }

  getdata (){

    return this.http.get('http://localhost:5275/api/driver')
  }
}
