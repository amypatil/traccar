/**
 * 
 */
/*
 * Ext.define('Traccar.view.Header', { extend: 'Ext.panel.Panel', xtype:
 * 'headerView', tbar: { items: [{ xtype: 'settingsMenu', enableToggle: false }] }
 * 
 * });
 */
Ext.define('Traccar.view.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'headerView',
    requires: [
        'Traccar.view.SettingsMenu',
        'Traccar.view.HeaderController'
    ],
    controller: 'headerController',
    layout: 'hbox',
    items: [
        {
        	xtype : 'panel',
        	layout: 'column',
        	items: [
        		{
        			xtype: 'image',
                    src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
                    height: 62,
                    width: 62,
        		},{
        			html : '<h1>MYPINHERE</h1>',
        			margin: '5 5 5 5' 
        		}
        	]
        },
        {
        	xtype: 'button',
            tooltipType: 'title',
            stateEvents: ['toggle'],
            enableToggle: true,
            stateful: {
                pressed: true
            },
        	 handler: function(){
        		 Ext.GlobalEvents.fireEvent('setTabEvent',{'tab':0});
        	 },
             reference: 'showMapButton',
             title:'Map',
             tooltip: Strings.reportTitle
        },
        
        {
        	xtype: 'button',
            tooltipType: 'title',
            stateEvents: ['toggle'],
            enableToggle: true,
            stateful: {
                pressed: true
            },
        	 handler: function(){
        		 Ext.GlobalEvents.fireEvent('setTabEvent',{'tab':1});
        	 },
             reference: 'showMapButton',
             title:'Map',
             tooltip: Strings.reportTitle
        },
        
        {
        	xtype: 'button',
            tooltipType: 'title',
            stateEvents: ['toggle'],
            enableToggle: true,
            stateful: {
                pressed: true
            },
        	 handler: function(){
        		 Ext.GlobalEvents.fireEvent('setTabEvent',{'tab':2});
        	 },
             reference: 'showMapButton',
             title:'Map',
             tooltip: Strings.reportTitle
        },
        { xtype: 'tbfill'},
        
        {
			xtype : 'tbtext',
			 reference: 'userName',
			html : '', //Traccar.app.getUser().data.name
			baseCls : 'x-panel-header-title-default'
		},
        {
        	xtype : 'panel',
        	layout: {
        	    type  : 'vbox',
        	    align : 'stretch',
        	    pack  : 'start',
        	},
        	items: [
        	    {xtype: 'settingsMenu',height:42,  margin: '10 10 10 10'},
        	]
        }
    ],
    init: function () {
    	alert(Traccar.app.getUser().data.name);
    	this.lookupReference('userName').html(Traccar.app.getUser().data.name)
    }
});