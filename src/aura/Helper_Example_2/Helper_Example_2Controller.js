({
	show : function(component, event, helper) {
		helper.invoke(component);
        var aval=component.get("v.aval");
        var bval=component.get("v.bval");
        var cval=parseInt(aval)+parseInt(bval);
        component.set("v.cval",cval);
	},
    callMe: function(component,event,helper){
        helper.invoke(component);
       var aval=component.get("v.aval");
        var bval=component.get("v.bval");
        var cval=parseInt(aval)*parseInt(bval);
        component.set("v.cval",cval);
    }
})