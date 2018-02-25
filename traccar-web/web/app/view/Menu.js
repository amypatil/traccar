/**
 * 
 */
Ext.define('Traccar.view.Menu', {
	extend : 'Ext.TabPanel',
	xtype : 'menuView',
	requires: [
	        'Traccar.view.MenuController'
	],
	controller: 'menu',
	 
	activeTab: 0,
	items : [ {
		title : 'Map',
		xtype: 'mapView'
	}, {
		title : 'Report',
		html : 'This is tab 2 content.'
	}, {
		title : 'Event',
		html : 'This is tab 3 content.'
	}],
	
	tabBar: {
        componentCls: 'toolbar-header-style',
        defaults: {
            xtype: 'button',
            tooltipType: 'title',
            stateEvents: ['toggle'],
            enableToggle: true,
            stateful: {
                pressed: true
            }
        },
        items: [
        	
        /*{
            xtype: 'tbtext',
            html: Strings.mapTitle,
            baseCls: 'x-panel-header-title-default'
        },*/ 
        
        {
            xtype: 'tbfill'
        }, 
        
        /*{
            handler: 'showReports',
            reference: 'showReportsButton',
            glyph: 'xf0f6@FontAwesome',
            stateful: false,
            enableToggle: false,
            tooltip: Strings.reportTitle
        }, {
            handler: 'showEvents',
            reference: 'showEventsButton',
            glyph: 'xf27b@FontAwesome',
            stateful: false,
            enableToggle: false,
            tooltip: Strings.reportEvents
        }, */
        
        
        {
            handler: 'updateGeofences',
            reference: 'showGeofencesButton',
            glyph: 'xf21d@FontAwesome',
            pressed: true,
            stateId: 'show-geofences-button',
            tooltip: Strings.sharedGeofences
        }, {
            handler: 'showLiveRoutes',
            reference: 'showLiveRoutes',
            glyph: 'xf1b0@FontAwesome',
            stateId: 'show-live-routes-button',
            tooltip: Strings.mapLiveRoutes
        }, {
            reference: 'deviceFollowButton',
            glyph: 'xf05b@FontAwesome',
            tooltip: Strings.deviceFollow,
            stateId: 'device-follow-button',
            toggleHandler: 'onFollowClick'
        }
        ]
    }
    
    
});