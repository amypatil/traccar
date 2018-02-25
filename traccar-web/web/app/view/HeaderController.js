/**
 * 
 */
Ext.define('Traccar.view.HeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.headerController',
    init: function () {
    	this.lookupReference('userName').setText(Traccar.app.getUser().data.name);
    }
});