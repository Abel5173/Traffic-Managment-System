import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccidentFormComponent } from './accident-form/accident-form.component';
import { PenalityGridComponent } from './penality-grid/penality-grid.component';

const routes: Routes = [
  { path: '',
  component: AccidentFormComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
