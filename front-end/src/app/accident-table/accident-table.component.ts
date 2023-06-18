import { Component, OnInit } from '@angular/core';
import { AccidentFormService } from '../Services/accident-form.service';

@Component({
  selector: 'app-accident-table',
  templateUrl: './accident-table.component.html',
  styleUrls: ['./accident-table.component.css']
})
export class AccidentTableComponent  implements OnInit{

  constructor(private accidentdata : AccidentFormService){}

  data : any ;
  query  :any ;

  ngOnInit() {

    this.accidentdata.getdata().subscribe(data => this.data = data) ;
  }


  public headerTemplate: any = (field: any, headerText: any, column: any) => {
    if (field === 'NO') {
      return '<div style="background: blue; padding: 5px;">' + headerText + '</div>';
    }
    return headerText;
  };

  searchevent(){

    this.accidentdata.searchAccident(this.query).subscribe(data =>this.data=  data);
  }

}
