({
	callMe: function(component, event, helper) {
		var name=event.getParam("accName");
        var action=component.get("c.accSearch");
        action.setParams({"accName":name});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                var result=response.getReturnValue();
                component.set("v.acc",result);
            }else{
                console.log('Error');
            }
        });
        $A.enqueueAction(action);
	}
})