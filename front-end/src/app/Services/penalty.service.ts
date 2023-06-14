import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

    constructor(private http : HttpClient) { }

    getdata (): Observable<IpenaltyData []>{

      return this.http.get<IpenaltyData[]>('http://localhost:5275/api/penalty');
  }

}
export interface IpenaltyData {
  
  // push(item: IpenaltyData[]): void;

  penalty_id: number,
  driver_license :number,
  driver_name:String,
  violation_type : String,
  date : Date,
  penalty_leve : string
  amount : String,
  penalty_driver_id :number,

 }
