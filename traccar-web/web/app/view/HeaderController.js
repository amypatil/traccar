/**
 * 
 */
Ext.define('Traccar.view.HeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.headerController',
    init: function () {
    	this.lookupReference('userName').setHtml('<h4>Welcome, ' + Traccar.app.getUser().data.name + '</h4>');
    }
});