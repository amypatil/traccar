/**
 * 
 */

/* Ext.define('Traccar.view.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'headerView',
    tbar: {
        items: [{
        xtype: 'settingsMenu',
        enableToggle: false
        }]
    }
    	
}); */
    

Ext.define('Traccar.view.Header', {
    extend: 'Ext.panel.Panel',
    xtype: 'headerView',
    requires: [
        'Traccar.view.SettingsMenu'
    ],
    cls: 'tcr-header',
    layout: 'column',
    height: 40,
    border: 0,
    items: [
        {
            xtype: 'image',
            title: 'MYPINHERE',
            src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
            height: 64,
            width: 64,
            border: 0,
            columnWidth: 0.25
        },
        {
            xtype: 'panel',
            title: 'Child Panel 2',
            columnWidth: 0.70,
            border: 0,
            height: 60
        },
        {
            xtype: 'settingsMenu',
            title: 'Child Panel 2',
            columnWidth: 0.05,
            border: 0,
            height: 60
        }
    ]
    
});