// import { OnInit } from "@angular/core";
// import { DashBoardService } from "../Services/dash-board.service";
// import { HttpClient } from "@angular/common/http";

// // datasource.ts

// export class penalty  implements OnInit{

//   totalpenalty !: number ;
//   phonewhiledriving !:number ;
//   overspeed ! :number ;
//   nobelt ! :number ;
//   redlight ! : number ;
//   drinkdrivern  !: number ;

//   constructor(private dashboard: DashBoardService, private http : HttpClient){}
//   ngOnInit(): void {

//     this.dashboard.gettotalpenalty().subscribe(data => this.totalpenalty = data)
//     this.dashboard.getdrinkdriver().subscribe(data => this.drinkdrivern = data)
//     this.dashboard.getredlight().subscribe(data => this.redlight = data)
//     this.dashboard.getphonewhiledriving().subscribe(data => this.phonewhiledriving = data)
//     this.dashboard.getnobelt().subscribe(data => this.nobelt = data)
//     this.dashboard.getoverspeed().subscribe(data => this.overspeed = data)


    
//   }
//     pieData: Object[] = [
//       { x: 'Phone while Driving', y:(this.phonewhiledriving / this.totalpenalty ) * 100},
//       { x: 'Overspeed ', y: (this.overspeed / this.totalpenalty ) * 100 },
//       { x: 'No Belt', y: (this.nobelt / this.totalpenalty ) * 100 },
//       { x: 'Red light', y: (this.redlight / this.totalpenalty ) * 100 },
//       { x: 'Drink Drive', y: (this.drinkdrivern / this.totalpenalty ) * 100 },
//       // Add more data points as needed
//     ];
// }



  