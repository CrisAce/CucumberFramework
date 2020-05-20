Feature: Portal Login


@PortalTest
Scenario: Home page default login
Given User is on NetBanking landing page
When User login into application with "cion" and "123"
Then Home page is populated
And Cards displayed are "true"

@PortalTest
Scenario: Home page default login
Given User is on NetBanking landing page
When User login into application with "admin" and "xyz"
Then Home page is populated
And Cards displayed are "false"


@PortalTest
Scenario: Home page default login
Given User is on NetBanking landing page
When User sign up with the followind detailes
|cristian|ion|cristi@abc.com|Romania|3223213|
Then Home page is populated
And Cards displayed are "false"

@PortalTest
Scenario Outline: Home page default login
Given User is on NetBanking landing page
When User log in into application with <Username> and <password>
Then Home page is populated
And Cards displayed are "true"


Examples:
|Username|password|
|user1   |pass1   |
|user2   |pass2   |
|user3   |pass3   |
|user4   |pass4   |