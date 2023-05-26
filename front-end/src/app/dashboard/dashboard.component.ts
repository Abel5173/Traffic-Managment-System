import { Component, OnInit, ViewChild } from '@angular/core';
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
  public primaryXAxis!: Object;
  public chartData!: Object[];
  public primaryYAxis!: Object;
  public title!: string;
  // public panels: any = [{ "sizeX": 1, "sizeY": 1, "row": 0, "col": 0 }  ]
  // public width = "290";
  ngOnInit(): void {
      this.piedata = pieData;
       this.legendSettings = {
          visible: false
      };
      this.palette = ["#006F3D", "#068D45", "#1AA968", "#5CCC99","#9EDDC0"];
      this.title = 'Sales Analysis';
        this.chartData = [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
        ];
        this.primaryXAxis = {
            valueType: 'Category'
        };
        this.primaryYAxis = {
            labelFormat: '${value}K'
        };
  }
  public data: string[] = ['Yeka', 'Ketema', 'Akaki', 'Kality', 'Arada', 'Bole']
}
