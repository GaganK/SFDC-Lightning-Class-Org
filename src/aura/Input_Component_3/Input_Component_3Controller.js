({
	show : function(component, event, helper) {
		var lname=component.find("lname").get("v.value");
        var fname=component.find("fname").get("v.value");
        var name=lname+' '+fname;
        component.find("name").set("v.value", name);
	},
    call : function(component, event, helper){
         component.find("lname").set("v.value",'');
         component.find("fname").set("v.value",'');
         component.find("name").set("v.value",'');
    }
    
})