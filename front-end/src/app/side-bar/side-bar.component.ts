import { Component, ViewChild} from '@angular/core';
import { SidebarComponent, TreeViewComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-side-bar',
    styleUrls: ['./side-bar.component.css'],
    templateUrl: './side-bar.component.html'
})
export class SideBarComponent {
    @ViewChild('sidebarTreeviewInstance') sidebarTreeviewInstance!: SidebarComponent;
    @ViewChild('treeviewInstance') treeviewInstance!: TreeViewComponent;
    public width: string = '290px';
    // public enableDock: boolean = true;
    // public dockSize:string ="1";
    public mediaQuery: string = ('(min-width: 400px)');
    // public target: string = '.main-content';
  
    public data: Object[] = [
        // <i class="fas fa-car-crash"></i>
        {nodeId: '01', nodeText: 'Dashboard', iconCss: 'fa fa-tachometer'},
        {nodeId: '02', nodeText: 'Driver', iconCss: 'fa fa-user', 
        nodeChild: [
            { nodeId: '04-01', nodeText: 'Driver' },
            { nodeId: '04-02', nodeText: 'Driver License' },
        ]
    },
        {nodeId: '03', nodeText: 'Vehicle', iconCss: 'fa fa-car', 
        nodeChild: [
            { nodeId: '04-01', nodeText: 'Vehicle' },
            { nodeId: '04-02', nodeText: 'Vehicle Owner' },
        ]}, 
        {nodeId: '04', nodeText: 'Traffic Officer', iconCss: 'fa fa-user-secret',
            nodeChild: [
                { nodeId: '04-01', nodeText: 'Traffic Officer' },
                { nodeId: '04-02', nodeText: 'Dispatchment' }
            ]
        },
        {nodeId: '05', nodeText: 'Accident', iconCss: 'fas fa-car-crash'},
        {
            nodeId: '07', nodeText: 'Penality', iconCss: 'fas fa-balance-scale',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Violation' },
                { nodeId: '05-01', nodeText: 'Penality' },
                { nodeId: '05-02', nodeText: 'Settlement' }
            ]
        },
        {nodeId: '08', nodeText: 'Training', iconCss: 'fas fa-chalkboard-teacher'},
        {
            nodeId: '09', nodeText: 'Reports', iconCss: 'fas fa-chart-line',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Users' },
                { nodeId: '05-02', nodeText: 'Lookup' }
            ]
        },
        {
            nodeId: '06', nodeText: 'Settings', iconCss: 'fa fa-wrench',
            nodeChild: [
                { nodeId: '05-01', nodeText: 'Traffic Accident' },
                { nodeId: '05-01', nodeText: 'Financial' },
                { nodeId: '05-02', nodeText: 'Training' }
            ]
        }
    ];
    public field:Object ={ dataSource: this.data, id: 'nodeId', text: 'nodeText', child: 'nodeChild',  };

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