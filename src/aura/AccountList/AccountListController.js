({
	handleGetAccountsEvent : function(component, event, helper) {
        var employeeNumber = event.getParam("employeeNumber");
        var accountType = event.getParam("accountType");
       
        // Call the server controller
        var getAccountsFromServer = component.get("c.getAccountsFromServer");

        getAccountsFromServer.setParams({
            employeeNumber: employeeNumber,
            accountType: accountType            
        });

        getAccountsFromServer.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var accounts = response.getReturnValue();
                component.set("v.accounts", accounts);
            } else if (state === "ERROR") {
                alert('Error : ' + JSON.stringify(response.getError()));
            }
        });
        
        $A.enqueueAction(getAccountsFromServer);
	}
})