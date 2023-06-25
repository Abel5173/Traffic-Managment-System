import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { DashBoardService } from '../Services/dash-board.service';

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
  lifelost !:number ;
  minorinjury !:number ;
  majorinjury !:number ;
  totalaccident !:number ;
  totaldriver !:number ;
  totalofficer !:number ;
  totalvehicle !:number ;
  totalpenalty !: number ;
  phonewhiledriving !:number ;
  overspeed ! :number ;
  nobelt ! :number ;
  redlight ! : number ;
  drinkdrivern  !: number ;




  constructor(private authservice : AuthService,private dashboard : DashBoardService){}
  ngOnInit(): void {

    this.dashboard.getlifelost().subscribe(data => this.lifelost = data)
    this.dashboard.getminorphysicalinjury().subscribe(data => this.minorinjury = data)
    this.dashboard.getmajorphysicalinjury().subscribe(data => this.majorinjury = data)
    this.dashboard.gettotalaccident().subscribe(data => this.totalaccident = data)

    this.dashboard.gettotaldriver().subscribe(data => this.totaldriver = data)
    this.dashboard.gettotalofficer().subscribe(data => this.totalofficer = data)
    this.dashboard.gettotalvehicle().subscribe(data => this.totalvehicle = data)

    this.dashboard.gettotalpenalty().subscribe(data => this.totalpenalty = data)
    this.dashboard.getdrinkdriver().subscribe(data => this.drinkdrivern = data)
    this.dashboard.getredlight().subscribe(data => this.redlight = data)
    this.dashboard.getphonewhiledriving().subscribe(data => this.phonewhiledriving = data)
    this.dashboard.getnobelt().subscribe(data => this.nobelt = data)
    this.dashboard.getoverspeed().subscribe(data => this.overspeed = data)



   const  pieData: Object[] = [
      { x: 'Phone while Driving', y:(this.phonewhiledriving / this.totalpenalty ) * 100},
      { x: 'Overspeed ', y: (this.overspeed / this.totalpenalty ) * 100 },
      { x: 'No Belt', y: (this.nobelt / this.totalpenalty ) * 100 },
      { x: 'Red light', y: (this.redlight / this.totalpenalty ) * 100 },
      { x: 'Drink Drive', y: (this.drinkdrivern / this.totalpenalty ) * 100 },
      // Add more data points as needed
    ];

    console.log(this.authservice.sessionValue);
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
