({
	show : function(component, event, helper) {
		var name=component.get("v.custName");
        var email=component.get("v.email");
        var body=component.get("v.body");
        var phone=component.get("v.phone");
        var action=component.get("c.invoke");
        action.setParams({"email":email,"body":body,"phone":phone,"name":name});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                var result=response.getReturnValue();
                alert(result);
            }
        });
        $A.enqueueAction(action);
	}
})