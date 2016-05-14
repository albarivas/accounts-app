({
	fireGetAccountsEvent : function(component, event, helper) {
		var employeeNumber = component.get("v.employeeNumber");
        var accountType = component.get("v.accountType");

        var eventToFire = $A.get("e.c:GetAccounts");
        eventToFire.setParams({
            employeeNumber: employeeNumber,
            accountType: accountType            
        });
       
        eventToFire.fire();
	}
})