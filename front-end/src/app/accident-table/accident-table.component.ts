import { Component } from '@angular/core';

@Component({
  selector: 'app-accident-table',
  templateUrl: './accident-table.component.html',
  styleUrls: ['./accident-table.component.css']
})
export class AccidentTableComponent {

  data = [];

  public headerTemplate: any = (field: any, headerText: any, column: any) => {
    if (field === 'NO') {
      return '<div style="background: blue; padding: 5px;">' + headerText + '</div>';
    }
    return headerText;
  };

}
