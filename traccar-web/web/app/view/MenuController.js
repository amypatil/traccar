/**
 * 
 */
Ext.define('Traccar.view.MenuController', {
	extend: 'Ext.app.ViewController',
    alias: 'controller.menu',
    init: function () {
    	this.setTab({'tab':0});
    },
    listen: {
    	   global: {
    	     'setTabEvent': 'setTab'
    	   }
    },
    setTab: function(arg){
    	this.getView().setActiveTab(arg.tab);
    }
});