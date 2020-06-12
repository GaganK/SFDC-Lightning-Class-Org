({
	haveFun : function(component, event, helper) {
        var acc=component.get("v.myId");
		var con=component.find("ldsRec").getNewRecord("Contact",
                          null,
                          false,
                         $A.getCallback(function(){
                             var rec=component.get("v.myRecord");
                             var myMsg=component.get("v.error");
                             if(rec===null || myMsg ){
                                 console.log('Record Creation failed');
                                 return;
                             }else{
                                 rec.AccountId=acc;
                                 console.log('Record Created');
                             }
                         }));
	},
    invoke : function(component,event,helper){
        var con=component.find("ldsRec").saveRecord($A.getCallback(function(SaveResult){
            if(SaveResult.State==='SUCCESS'){
                console.log('Record Saved Successfully');
            }else{
                if(SaveResult.State ==='ERROR'){
                    console.log('Recrod Not Saved Successfully');
                }
            }
        }));
    
	}
})