({
	show : function(component, event, helper) {
		var parent =component.find("parent").get("v.value");
        var child=component.find("child").get("v.value");
        var compName1='';
        if(parent=='Account'){
            compName1='c:Comp_Account';
        }else{
            compName1='c:Comp_Lead'; 
        }
        var compName2='';
        if(child=='Contact'){
            compName2='c:Comp_Contact';
        }else{
            compName2='c:Comp_Opportunity';
        }
        $A.createComponent(compName1,{},function(cmp,status,errorMessage){
            if(status==='SUCCESS'){
                var body=component.get("v.body");
                body.push(cmp);
                component.set("v.body",body);
            }
        });
        $A.createComponent(compName2,{},function(cmp,status,errorMessage){
            if(status==='SUCCESS'){
                var body=component.get("v.body");
                body.push(cmp);
                component.set("v.body",body);
            }
        });
	}
})