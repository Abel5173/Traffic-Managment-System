import { Component, OnInit, ViewChild } from '@angular/core';
import { NodeClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
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
    { name: 'Officer', routerLink: '/penalitytable', iconCss: 'custom-icon-color fas fa-user-secret ' },
  ];

  

  constructor(private router: Router, public logindata : AuthService ) { }

  ngOnInit(): void {

    if(! this.logindata.islogin ){

      
        this.sidebarTreeviewInstance.hide();
        this.treeviewInstance.collapseAll();

        if (this.treeviewInstance) {
          this.treeviewInstance.collapseAll();
        }

    }
  }

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
