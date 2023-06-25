import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  constructor(private http : HttpClient) { }

  getminorphysicalinjury() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/minorphysicalinjury');
  }

  getmajorphysicalinjury() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/majorphysicalinjury');
  }

  getlifelost() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/lifelost');
  }

  gettotalaccident() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/totalaccident');
  }



  gettotaldriver() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/totaldriver');
  }

  gettotalofficer() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/totalofficer');
  }

  gettotalvehicle() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/totalvehicle');
  }


  getoverspeed() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/overspeed');
  }

  getnobelt() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/nobelt');
  }

  getphonewhiledriving() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/phonewhiledriving');
  }

  getdrinkdriver() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/drink');
  }

  getredlight() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/red');
  }

  gettotalpenalty() {
    return this.http.get<number>('http://localhost:5275/api/dashboard/totalpenalty');
  }

  
  
}
