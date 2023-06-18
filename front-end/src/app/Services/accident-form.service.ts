import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccidentFormService {

  constructor(private http: HttpClient) { }


  getdata (){

    return this.http.get('http://localhost:5275/api/accident')
  }

  submitAccidentForm(formData: any){
    return this.http.post('/api/Accident', formData);
  }

  searchAccident(query: string): Observable<any[]> {
    const params = { query: query };
    return this.http.get<any[]>('http://localhost:5275/api/accident/search', {params});
  }
}
