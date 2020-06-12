({
	search : function(component, event, helper) {
		var industry=component.find("industry").get("v.value");
        var rating=component.find("rating").get("v.value");
        var action=component.get("c.searchData");
        action.setParams({"accIndustry":industry,"rating":rating});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                component.set("v.accounts",response.getReturnValue());
            }else{
                console.log('Error Message');
            }
        });
        $A.enqueueAction(action);
	}
})