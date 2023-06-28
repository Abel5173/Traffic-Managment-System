import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { DashBoardService } from '../Services/dash-board.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  phonewhiledriving :any ;
  overspeed  :any ;
  nobelt :any ;
  redlight  : any ;
  // drinkdrivern  !: number ;
  pieData :any;
  


  constructor(private authservice : AuthService,private dashboard : DashBoardService){}
  ngOnInit(): void {

  
  

    this.dashboard.getlifelost().subscribe(data => this.lifelost = data)
    this.dashboard.getminorphysicalinjury().subscribe(data => this.minorinjury = data)
    this.dashboard.getmajorphysicalinjury().subscribe(data => this.majorinjury = data)
    this.dashboard.gettotalaccident().subscribe(data => this.totalaccident = data)

 

    this.dashboard.gettotaldriver().subscribe(data => this.totaldriver = data)
    this.dashboard.gettotalofficer().subscribe(data => this.totalofficer = data)
    this.dashboard.gettotalvehicle().subscribe(data => this.totalvehicle = data)

  //   this.dashboard.gettotalpenalty().subscribe(data => this.totalpenalty = data)
  //   // this.dashboard.getdrinkdriver().subscribe(data => this.drinkdrivern = data)
  //   this.dashboard.getredlight().subscribe(data => this.redlight = data)
  //   this.dashboard.getphonewhiledriving().subscribe(data => this.phonewhiledriving = data)
  //   this.dashboard.getnobelt().subscribe(data => this.nobelt = data)
  //   this.dashboard.getoverspeed().subscribe(data => {this.overspeed = data
    
    
  //      this.pieData = [

  //   { x: 'Phone while Driving', y:(this.phonewhiledriving / this.totalpenalty ) * 100},
  //   { x: 'Overspeed ', y: (Number(this.overspeed )/ Number(this.totalpenalty) ) * 100 },
  //   { x: 'No Belt', y: (Number(this.nobelt )/ Number(this.totalpenalty )) * 100 },
  //   { x: 'Red light', y: (Number(this.redlight) /Number( this.totalpenalty )) * 100 },
    
  //   // Add more data points as needed
  // ];
  //   })
             this.getData();




    console.log(this.overspeed);
   console.log(this.lifelost);
   console.log(this.redlight);
   console.log(this.pieData);
   console.log(this.overspeed);



 

    console.log(this.authservice.sessionValue);
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


  getData(): void {
    forkJoin([
      this.dashboard.gettotalpenalty(),
      this.dashboard.getredlight(),
      this.dashboard.getphonewhiledriving(),
      this.dashboard.getnobelt(),
      this.dashboard.getoverspeed()
    ]).subscribe(([totalpenalty, redlight, phonewhiledriving, nobelt, overspeed]) => {
      this.totalpenalty = totalpenalty;
      this.redlight = redlight;
      this.phonewhiledriving = phonewhiledriving;
      this.nobelt = nobelt;
      this.overspeed = overspeed;

      this.pieData = [
        { x: 'Phone while Driving', y: (this.phonewhiledriving / this.totalpenalty) * 100 },
        { x: 'Overspeed', y: (Number(this.overspeed) / Number(this.totalpenalty)) * 100 },
        { x: 'No Belt', y: (Number(this.nobelt) / Number(this.totalpenalty)) * 100 },
        { x: 'Red light', y: (Number(this.redlight) / Number(this.totalpenalty)) * 100 },
        // Add more data points as needed
      ];
    });
  }

}