({
	show : function(component, event, helper) {
        $A.createComponent("lightning:input",
                           {"aura:id":"one","label":"MyName"},
                           function(cmp,status,errorMessage){
                               if(status==='SUCCESS'){
                                	var body= component.get("v.body");
                                    body.push(cmp);
                                    component.set("v.body",body);
                               }
                           }
                          
                          )
	}
})