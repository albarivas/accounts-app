public class AccountListServerController
{
    @AuraEnabled
    public static List<Account> getAccountsFromServer(Integer employeeNumber, String accountType)
    {
        return [SELECT Name, NumberOfEmployees FROM Account WHERE 
                NumberOfEmployees > :employeeNumber AND
                Type = :accountType];
    }
}