import { Component, OnInit } from '@angular/core';
import { OfficerService } from '../Services/officer.service';

@Component({
  selector: 'app-officertable',
  templateUrl: './officertable.component.html',
  styleUrls: ['./officertable.component.css']
})
export class OfficertableComponent implements OnInit {

  constructor(private officer : OfficerService){}

  data : any;

  ngOnInit() {

    this.officer.getdata().subscribe(data => this.data = data) ;
  }



}
