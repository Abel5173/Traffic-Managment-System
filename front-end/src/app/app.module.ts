import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule, AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

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
    AppBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
