Feature:login
#Scenario outline is used when we want to test with multiple test data
Scenario Outline: Validating the Login page of HRM.
Given open the browser and enter url
When enter username as <username>
And enter password as <password>
And click on submit
Then Login should be successful
# test data should be given in scenario outline

Examples:
    | username| password |
    | Admin   | Admin123 |
    | admin   | passs    |
    | Admin   | admin123 |
    | admin   | Admin123 |
    |         |          |