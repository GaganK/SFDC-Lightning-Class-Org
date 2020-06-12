({
	show : function(component, event, helper) {
        component.set("v.columns",[
            {label:"Name",fieldName:"Name",type:"text"},
            {label:"Amount",fieldName:"amount",type:"currency",typeAttributes: { currencyCode: 'USD'}},
            {label:"StageName",fieldName:"StageName",type:"text"},
            {label:"CloseDate",fieldName:"CloseDate",type:"date"}
            
        ]);
       var action=component.get("c.invoke");
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                component.set("v.myData",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})