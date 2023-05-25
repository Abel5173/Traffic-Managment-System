import { Component, OnInit } from '@angular/core';
import { pieData } from './datasource';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public piedata!: Object[];
  public legendSettings!: Object;
  public palette!: string[];
  // public width = "290";
  ngOnInit(): void {
      this.piedata = pieData;
       this.legendSettings = {
          visible: false
      };
      this.palette = ["#006F3D", "#068D45", "#1AA968", "#5CCC99","#9EDDC0"]
  }
}
