import { Component, ViewChild} from '@angular/core';
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
    constructor(private router: Router) { }

    public width: string = '270px';
    // public enableDock: boolean = true;
    // public dockSize:string ="1";
    public mediaQuery: string = ('(min-width: 400px)');
    // public target: string = '.main-content';
  
    public data: Object[] = [
        { nodeId: '01', nodeText: 'Dashboard', iconCss: 'custom-icon-color fa fa-tachometer', routerLink: '/penalitytable' },
        { nodeId: '02', nodeText: 'Driver', iconCss: 'custom-icon-color fa fa-user', routerLink: '/drivertable' },
        { nodeId: '03', nodeText: 'Vehicle', iconCss: 'custom-icon-color fa fa-car', routerLink: '/penalityform' },
        // { nodeId: '04', nodeText: 'Traffic Officer', routerLink:'/penalitytable' ,' iconCss: 'custom-icon-color fa fa-user-secret' },
        { nodeId: '05', nodeText: 'Accident', routerLink: '/penalityform', iconCss: 'custom-icon-color fas fa-car-crash' },
        { nodeId: '07', nodeText: 'Penality', iconCss: 'custom-icon-color fas fa-balance-scale', routerLink: '/drivertable' }
      ];

     public field: Object = {
        dataSource: this.data,
        id: 'nodeId',
        text: 'nodeText',
        routerLink: 'routerLink'
      };

      public onNodeClicked(event: any): void {
        const routerLink = event.nodeData.routerLink;
          this.router.navigate(routerLink);
          console.log('everybody oh there goes gravity')
      }
      
      
      
    public onCreated(args: any) {
         this.sidebarTreeviewInstance.element.style.visibility = 'hidden';
    }
    public onClose(args: any) {
        this.treeviewInstance.collapseAll();
    }
    openClick() {
        if(this.sidebarTreeviewInstance.isOpen)
        {
            this.sidebarTreeviewInstance.hide();
            this.treeviewInstance.collapseAll();
        }
        else {
            this.sidebarTreeviewInstance.show();
            // this.treeviewInstance.expandAll();
        }  
    }
    
}