({
	show : function(component, event, helper) {
        $A.createComponent("c:Com_one",{"empName":"Satish"},function(comp,status,errorMessage){
            var body=component.get("v.body");
            body.push(comp);
            component.set("v.body",body);
        });
	}
})