({
	invoke : function(component, event, helper) {
		var name=component.get("v.searchText");
        var evt =$A.get("e.c:App_Event_Two");
        evt.setParams({"accName":name});
        evt.fire();
	}
})