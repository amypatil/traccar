/**
 * 
 */
Ext.define('Traccar.view.Menu', {
	extend : 'Ext.TabPanel',
	xtype : 'menuView',
	requires: [
	        'Traccar.view.MenuController'
	],
	tabBar: {
		   hidden: true
	},
	controller: 'menu',
	items : [ {
		title : 'Map',
		xtype: 'mapView'
	}, {
		title : 'Report',
		 xtype: 'reportView'
	}, {
		title : 'Event',
		html : 'This is tab 3 content.'
	}],
});