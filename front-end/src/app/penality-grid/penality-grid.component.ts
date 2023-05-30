import { Component } from '@angular/core';

@Component({
  selector: 'app-penality-grid',
  templateUrl: './penality-grid.component.html',
  styleUrls: ['./penality-grid.component.css']
})
export class PenalityGridComponent {

  data = [];

  public headerTemplate: any = (field: any, headerText: any, column: any) => {
    if (field === 'NO') {
      return '<div style="background: blue; padding: 5px;">' + headerText + '</div>';
    }
    return headerText;
  };

}
