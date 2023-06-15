import { Component, ViewChild } from '@angular/core';
import { NodeClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidebarTreeviewInstance') sidebarTreeviewInstance!: SidebarComponent;
  @ViewChild('treeviewInstance') treeviewInstance!: TreeViewComponent;

  public width: string = '270px';
  public mediaQuery: string = '(min-width: 400px)';

  public data: Object[] = [
    { name: 'Dashboard', routerLink: '/home', iconCss: 'custom-icon-color fa fa-tachometer' },
    { name: 'Driver', routerLink: '/drivertable', iconCss: 'custom-icon-color fa fa-user' },
    { name: 'Vehicle', routerLink: '/vehicletable', iconCss: 'custom-icon-color fa fa-car' },
    { name: 'Accident', routerLink: '/accidenttable', iconCss: 'custom-icon-color fas fa-car-crash' },
    { name: 'Penality', routerLink: '/penalitytable', iconCss: 'custom-icon-color fas fa-balance-scale' },
  ];

  constructor(private router: Router) { }

  public onCreated(args: any) {
    // this.sidebarTreeviewInstance.hide();
  }

  public onClose(args: any) {
    if (this.treeviewInstance) {
      this.treeviewInstance.collapseAll();
    }
  }

  public openClick() {
    if (this.sidebarTreeviewInstance.isOpen) {
      this.sidebarTreeviewInstance.hide();
      if (this.treeviewInstance) {
        this.treeviewInstance.collapseAll();
      }
    } else {
      this.sidebarTreeviewInstance.show();
    }
  }
}
