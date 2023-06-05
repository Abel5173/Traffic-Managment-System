import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccidentFormComponent } from './accident-form/accident-form.component';
import { PenalityGridComponent } from './penality-grid/penality-grid.component';
import { PenaltyFormComponent } from './penalty-form/penalty-form.component';
import { AccidentTableComponent } from './accident-table/accident-table.component';
import { DrivertableComponent } from './drivertable/drivertable.component';

const routes: Routes = [
  { path: '',
  component: AccidentFormComponent
  
},
{
  path : 'penality' , component : PenalityGridComponent
},
{
  path : 'penalityform' , component : PenaltyFormComponent
},

{
  path : 'accidenttable' , component : AccidentTableComponent
},
{
  path : 'drivertable' , component : DrivertableComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
