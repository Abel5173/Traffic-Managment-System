import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http : HttpClient) { }

  getdata(){

    return this.http.get('http://localhost:5275/api/vehicle');
  }
}
