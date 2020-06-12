({
	calculate : function(component, event, helper) {
		var amount=component.get("v.amount");
        var years=component.get("v.years");
        var rate=component.get("v.rate");
        var intrest =(amount*years*rate)/100;
        component.set("v.intrest",intrest);
        console.log('Intrest'+intrest);
	},
    resetData: function(component, event, helper){
    	component.set("v.amount",'');
    	component.set("v.rate",'');
    	component.set("v.years",'');
    	component.set("v.intrest",'');
	}
})