import { Component, OnInit } from '@angular/core';
import { DriverService } from '../Services/driver.service';

@Component({
  selector: 'app-drivertable',
  templateUrl: './drivertable.component.html',
  styleUrls: ['./drivertable.component.css']
})
export class DrivertableComponent implements OnInit {

  constructor(private driverdata : DriverService){}

  data : any  ;
  query : any ;

  ngOnInit() {

    this.driverdata.getdata().subscribe(data => this.data = data);

  }

  searchevent(){
    this.driverdata.searchDriver(this.query).subscribe(data =>this.data=  data);
  }

}
