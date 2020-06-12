({
    show : function(component, event, helper) {
        var action=component.get("c.callMe");
        
        action.setCallback(this,function(response){
            var state =response.getState();
            if(state ==='SUCCESS'){
                console.log('Operation Success');
                var result=response.getReturnValue();
                component.set("v.empName",result);
            }else{
                console.log('Failed');
            }
        });
        $A.enqueueAction(action);
        
    }
})