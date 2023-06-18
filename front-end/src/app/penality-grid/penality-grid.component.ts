import { Component, OnInit } from '@angular/core';
import { PenaltyService } from '../Services/penalty.service';

@Component({
  selector: 'app-penality-grid',
  templateUrl: './penality-grid.component.html',
  styleUrls: ['./penality-grid.component.css']
})
export class PenalityGridComponent   implements OnInit{

  constructor(private penaltydata:PenaltyService){}
  
  data : any;
  query : any ;

  ngOnInit() {

   this.penaltydata.getdata().subscribe(data => this.data = data);
  }

  

  searchevent(){

    this.penaltydata.searchPenalty(this.query).subscribe(data =>this.data=  data);
  }

  public headerTemplate: any = (field: any, headerText: any, column: any) => {
    
    if (field === 'NO') {
      return '<div style="background: blue; padding: 5px;">' + headerText + '</div>';
    }
    return headerText;
  };

}
