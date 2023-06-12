import { Component } from '@angular/core';

@Component({
  selector: 'app-penality-grid',
  templateUrl: './penality-grid.component.html',
  styleUrls: ['./penality-grid.component.css']
})
export class PenalityGridComponent {

  data = [
    {'NO' : '1','Driver License' : '1232','Driver Name':'bereket','Violation Type':'over speed', 'Date':'2/2/2002','Penality Level':'medium','Amount':'3234','Action':'right'}
  ];

  public headerTemplate: any = (field: any, headerText: any, column: any) => {
    if (field === 'NO') {
      return '<div style="background: blue; padding: 5px;">' + headerText + '</div>';
    }
    return headerText;
  };

}
