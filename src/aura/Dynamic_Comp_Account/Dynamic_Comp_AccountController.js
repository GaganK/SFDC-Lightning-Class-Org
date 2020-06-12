({
	callMe : function(component, event, helper) {
		var action=component.get("c.getData");
        action.setCallback(this,function(response){
            if(response.getState()==='SUCCESS'){
                var res=response.getReturnValue();
                component.set("v.accounts",res);
            }
        });
        $A.enqueueAction(action);
	}
})