({
	invoke: function(component, event, helper) { 
		var evt=component.getEvent('myEvent');
        evt.setParams({'empName':'Satish Myla'});
        evt.fire();
	}
})