({
	invoke : function(component, event, helper) {
		var objName=component.get("v.objName");
        var fldName=component.get("v.fldName");
        var action=component.get("c.getOptions");
        action.setParams({"objName":objName,"fieldName":fldName});
        action.setCallback(this,function(response){
            var state =response.getState();
            if(state ==='SUCCESS'){
                var result=response.getReturnValue();
                component.set("v.fldOptions",result);
            }
        });
        $A.enqueueAction(action);
	}
})