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
        'Traccar.view.SettingsMenu'
    ],
    layout: 'hbox',
    items: [
        {
        	xtype : 'panel',
			layout: 'column',
			flex:0.47,
        	items: [
        		{
        			xtype: 'image',
                    src: 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/location-alt-512.png',
                    height: 40,
					width: 35,
					margin: '10 0 0 0'
        		},{
        			html : '<h1>MYPINHERE</h1>',
        			margin: '5 5 5 5' 
        		}
        	]
		},
		
		{
			xtype: 'button',
			text:'Map',
			scale   : 'medium',
            tooltipType: 'Map',
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
			 tooltip: Strings.reportTitle,
			 margin: '14 5 5 5' 
        },
        
        {
			xtype: 'button',
			text:'Report',
			scale   : 'medium',
            tooltipType: 'Report',
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
			 tooltip: Strings.reportTitle,
			 margin: '14 5 5 5' 
        },
        
        {
			xtype: 'button',
			text:'Event',
			scale   : 'medium',
            tooltipType: 'Event',
            stateEvents: ['click','changeMe'],
            enableToggle: true,
            stateful: {
                pressed: true
            },
        	 handler: function(){
        		 Ext.GlobalEvents.fireEvent('setTabEvent',{'tab':2});
        	 },
             reference: 'showMapButton',
             title:'Map',
			 tooltip: Strings.reportTitle,
			 margin: '14 5 5 5' 
        },
        
        
        { xtype: 'tbfill'},
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
    ]
});