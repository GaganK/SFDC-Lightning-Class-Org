({
	callMe : function(component, event, helper) {
        component.find("newLeadId").getNewRecord(
            'Lead',
             null,
             false,
            $A.getCallback(function(){
                var rec=component.get("v.sampleRec");
                var msg=component.get("v.errMsg");
                if(rec=== null || msg){
                    console.log('Failed');
                    return;
                }else{
                    console.log('Success');
                }
            }));    
	},
    invoke : function(component,event,helper){
        component.find("newLeadId").saveRecord($A.getCallback(function(saveResult){
            var state=saveResult.getState();
            if(state==='SUCCESS'|| state==='DRAFT'){
                console.log('Record Saved');
                var myId=component.get("v.sampleRec");
                var navEvt = $A.get("e.force:navigateToSObject");
    		    navEvt.setParams({
      				"recordId":myId.Id ,
    			});
    navEvt.fire();
            }else{
                console.log('Record Failed');
                
            }
        }));
    }
})