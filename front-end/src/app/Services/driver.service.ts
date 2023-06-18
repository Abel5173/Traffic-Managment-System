import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IofficerData } from './officer.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http : HttpClient) { }

  getdata (){

    return this.http.get('http://localhost:5275/api/driver')
  }

  searchDriver(query: string): Observable<any[]> {
    const params = { query: query };
    return this.http.get<any[]>('http://localhost:5275/api/driver/search', {params});
  }
}
