({
	show : function(component, event, helper) {
		var con=component.get("v.con");
        var action=component.get("c.createCon");
        action.setParams({"con":con});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state ==='SUCCESS'){
                component.set("v.status",response.getReturnValue());
                console.log('Success');
            }else{
                console.log('Failed');
            }
        });
        $A.enqueueAction(action);
        
	}
})