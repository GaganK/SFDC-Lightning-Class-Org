({
	invoke : function(component, event, helper) {
        component.find("myId").deleteRecord($A.getCallback(function(deleteResult){
            if(deleteResult.state ==='SUCCESS'){
                console.log('Deleted Successfully');
            }else{
                console.log('Problem deleting record, error: ' + JSON.stringify(deleteResult.error));

            }
        }));
	}
})