import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule, AppBarModule } from '@syncfusion/ej2-angular-navigations';
// import { SideBarComponent } from './side-bar/side-bar.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
<<<<<<< HEAD
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { RouterModule, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PenalityGridComponent } from './penality-grid/penality-grid.component';
import { AccidentFormComponent } from './accident-form/accident-form.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AccidentTableComponent } from './accident-table/accident-table.component';
import { PenaltyFormComponent } from './penalty-form/penalty-form.component';
import { DrivertableComponent } from './drivertable/drivertable.component';
import { VehicletableComponent } from './vehicletable/vehicletable.component';
import { OfficertableComponent } from './officertable/officertable.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
    PenalityGridComponent,
    AccidentFormComponent,
    AccidentTableComponent,
    PenaltyFormComponent,
    DrivertableComponent,
    VehicletableComponent,
    OfficertableComponent,
    LoginComponent
=======
import { PenalityGridComponent } from './penality-grid/penality-grid.component';
import { AccidentFormComponent } from './accident-form/accident-form.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, PenalityGridComponent, AccidentFormComponent
>>>>>>> 6441e3e (form and penality grid)
  ],
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterModule,
    ListViewModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TreeViewModule,
    ButtonModule,
    AppBarModule,
    FontAwesomeModule,
    AccumulationChartModule,
    GridModule,
    DashboardLayoutModule,
<<<<<<< HEAD
    ChartModule,
    DropDownListModule,
    HttpClientModule,
    FormsModule,

=======
>>>>>>> 6441e3e (form and penality grid)
    
  ],
  providers: [CategoryService, 
    LegendService, 
    TooltipService, 
    DataLabelService, 
    LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
