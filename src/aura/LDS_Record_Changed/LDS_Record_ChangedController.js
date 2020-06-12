({
	callMe : function(component, event, helper) {
		console.log(''+event.getParams());
	},
    invoke : function(component,event,helper){
        component.find("myId").saveRecord($A.getCallback(function(saveResult){
            
        }));
    }
})