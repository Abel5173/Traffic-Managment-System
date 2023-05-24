export var sideMenus =  [
    {
        nodeId: '01', nodeText: 'Dashboard', iconCss: 'fa fa-tachometer',url:'',
    },
    {
        nodeId: '02', nodeText: 'Operation', iconCss: 'fa fa-cogs',url:'operation/list',
    },
    {
        nodeId: '03', nodeText: 'Payment', iconCss: 'fa fa-credit-card-alt',url:'payment/list'

    },
    {
        nodeId: '05', nodeText: 'Shipping Agent', iconCss: 'fa fa-male',url:'shipping-agent/list'
    },
    {
        nodeId: '06', nodeText: 'Driver', iconCss: 'fa fa-user-secret' , url:'driver/list'
    },
    {
        nodeId: '07', nodeText: 'Truck', iconCss: 'fa fa-truck' , url:'truck/list'
    },
    {
        nodeId: '08', nodeText: 'Port', iconCss: 'fa fa-fort-awesome' , url:'port/list'
    },
    {
        nodeId: '09', nodeText: 'Customer', iconCss: 'fa fa-user-o' , url: 'company/list'
    },
    {
        nodeId: '10', nodeText: 'Operation Follow Up', iconCss: 'fa fa-blind',  url:'operationfollowup/oprations'
    },
    {
        nodeId: '11', nodeText: 'Assign Goods', iconCss: 'fa fa-ship',url:'assign_goods/list'
    },
    {
        nodeId: '12', nodeText: 'Reassign Goods', iconCss: 'fa fa-repeat',url:'reassign-goods'
    },
    {
        nodeId: '13', nodeText: 'Gate Pass', iconCss: 'fa fa-arrow-circle-o-right',url:'gate_pass/list'
    },
    {
        nodeId: '14', nodeText: 'Print Document', iconCss: 'fa fa-print',url:'print'
    },
    {
        nodeId: '15', nodeText: 'Documentation', iconCss: 'fa fa-book' , url : 'documentation/list'
    },
    {
        nodeId: '16', nodeText: 'Users and Group', iconCss: 'fa fa-user-circle-o',
        nodeChild:[
            {nodeId:'16-01',nodeText:'Users',iconCss:'fa fa-user-plus' ,  url:'users-and-group/users/list'},
            {nodeId:'16-02',nodeText:'Group',iconCss:'fa fa-users', url:'users-and-group/group/list'}
        ]
    },
    {
        nodeId: '17', nodeText: 'Lookup', iconCss: 'fa fa-outdent', url : 'lookup/list'
    },
    {
        nodeId: '19', nodeText: 'Currency Converter', iconCss: 'fa fa-usd',url:'currency_converter'
    },
    {
        nodeId: '20', nodeText: 'System Settings', iconCss: 'fa fa-gear',url:'settings'
    }
];