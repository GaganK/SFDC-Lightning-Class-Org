({
	show : function(component, event, helper) {
		var industry=component.find("indus").get("v.value");
        component.set("v.columns",[
            {label:"Account Name",fieldName:"Name",type:"text"},
            {label:"Account Industry",fieldName:"Industry",type:"text"},
            {label:"Rating",fieldName:"Rating",type:"text"},
            {label:"Type",fieldName:"Type",type:"text"}
        ]);
        var action=component.get("c.search");
        action.setParams({"industry":industry});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                component.set("v.accounts",response.getReturnValue());
            }else{
                console.log('Error');
            }
        });
        $A.enqueueAction(action);
	}
})