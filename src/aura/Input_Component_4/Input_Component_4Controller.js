({
	add : function(component, event, helper) {
		var aval=component.find("aval").get("v.value");
        var bval=component.find("bval").get("v.value");
        var result=parseInt(aval)+parseInt(bval);
        component.find("res").set("v.value",result);
	},
    show :function(component,event,helper){
        component.find("aval").set("v.value",'');
        component.find("bval").set("v.value",'');
        component.find("res").set("v.value",'');
    }
})