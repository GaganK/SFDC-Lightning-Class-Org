({
	show : function(component, event, helper) {
		var aval=component.get("v.aval");
        var bval=component.get("v.bval");
        var cval=aval+bval;
        component.set("v.cval",cval);
	},
    invoke :function(component,event,helper){
        component.set("v.aval",0);
        component.set("v.bval",0);
        component.set("v.cval",0);
    }
})