import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccidentFormComponent } from './accident-form/accident-form.component';
import { PenalityGridComponent } from './penality-grid/penality-grid.component';
import { PenaltyFormComponent } from './penalty-form/penalty-form.component';
import { AccidentTableComponent } from './accident-table/accident-table.component';
import { DrivertableComponent } from './drivertable/drivertable.component';
import { OfficertableComponent } from './officertable/officertable.component';
import { VehicletableComponent } from './vehicletable/vehicletable.component';

const routes: Routes = [
{ 
  path: '', component: AccidentFormComponent
},
{ 
  path: 'home', component: AccidentFormComponent
},
{
  path : 'penalitytable' , component : PenalityGridComponent
},
{
  path : 'penalityform' , component : PenaltyFormComponent
},

{
  path : 'accidenttable' , component : AccidentTableComponent
},
{
  path : 'accidentform' , component : AccidentFormComponent
},
{
  path : 'drivertable' , component : DrivertableComponent
},
{
  path : 'officertable' , component : OfficertableComponent
},
{
  path : 'vehicletable' , component : VehicletableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
