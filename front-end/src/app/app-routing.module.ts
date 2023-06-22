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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { 
    path: '', component: LoginComponent
  },
{ 
  path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] 
},
{ 
  path: 'home', component: DashboardComponent,canActivate: [AuthGuard] 
},
{
  path : 'penalitytable' , component : PenalityGridComponent,canActivate: [AuthGuard] 
},
{
  path : 'penalityform' , component : PenaltyFormComponent,canActivate: [AuthGuard] 
},

{
  path : 'accidenttable' , component : AccidentTableComponent,canActivate: [AuthGuard] 
},
{
  path : 'accidentform' , component : AccidentFormComponent,canActivate: [AuthGuard] 
},
{
  path : 'drivertable' , component : DrivertableComponent,canActivate: [AuthGuard] 
},
{
  path : 'officertable' , component : OfficertableComponent,canActivate: [AuthGuard] 
},
{
  path : 'vehicletable' , component : VehicletableComponent,canActivate: [AuthGuard] 
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
