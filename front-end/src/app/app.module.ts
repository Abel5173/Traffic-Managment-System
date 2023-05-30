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
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { RouterModule, RouterLink } from '@angular/router';

import { PenalityGridComponent } from './penality-grid/penality-grid.component';
import { AccidentFormComponent } from './accident-form/accident-form.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
    PenalityGridComponent,
    AccidentFormComponent
  ],
  imports: [
    RouterLink,
    RouterModule,
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
    ChartModule,
    DropDownListModule,

    
  ],
  providers: [CategoryService, 
    LegendService, 
    TooltipService, 
    DataLabelService, 
    LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
