import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../Services/vehicle.service';

@Component({
  selector: 'app-vehicletable',
  templateUrl: './vehicletable.component.html',
  styleUrls: ['./vehicletable.component.css']
})
export class VehicletableComponent  implements OnInit{

  constructor(private vehicle : VehicleService){}

  data : any;

  ngOnInit(){
      
    this.vehicle.getdata().subscribe(data => this.data = data);

  }

}
