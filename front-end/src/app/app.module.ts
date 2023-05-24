import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule, AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent, 
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    TreeViewModule,
    ButtonModule,
    AppBarModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
