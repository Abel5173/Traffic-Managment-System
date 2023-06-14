import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccidentFormService {

  constructor(private http: HttpClient) { }

  submitAccidentForm(formData: any){
    return this.http.post('/api/Accident', formData);
  }
}
