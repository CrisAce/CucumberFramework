package stepDefinition;


import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefinition {
	
	
    @Given("^Validate the browser$")
    public void validate_the_browser() throws Throwable {
        System.out.println("Check the browser");
    }

    @When("^Browser is trigger$")
    public void browser_is_trigger() throws Throwable {
        System.out.println("Browser is triggerd");
    }

    @And("^check if browser is started$")
    public void check_if_browser_is_started() throws Throwable {
       System.out.println("Browser has been started");
    }
	

	
	  @Given("^User is on NetBanking landing page$") public void
	  user_is_on_netbanking_landing_page() throws Throwable {
	  System.out.println("User is on NetBanking landing page$"); }
	 
    
    @When("^User sign up with the followind detailes$")
    public void user_sign_up_with_the_followind_detailes(DataTable data) throws Throwable {
    	List<List<String>> obj =data.raw();
    	System.out.println(obj.get(0).get(0));
    	System.out.println(obj.get(0).get(1));
    	System.out.println(obj.get(0).get(2));
    	System.out.println(obj.get(0).get(3));
    	System.out.println(obj.get(0).get(4));
    	
        
    }

    @When("^User log in into application with (.+) and (.+)$")
    public void user_log_in_into_application_with_and(String username, String password) throws Throwable {
       System.out.println(username);
       System.out.println(password);
    }
    
    @When("^User login into application with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_login_into_application_with_something_and_something(String strArg1, String strArg2) throws Throwable {
        
		
		  System.out.println(strArg1); 
		  System.out.println(strArg2);
		 
    }

	
	  @Then("^Home page is populated$") public void home_page_is_populated() throws
	  Throwable { System.out.println("Home page is populated"); }
	 
    @And("^Cards displayed are \"([^\"]*)\"$")
    public void cards_displayed_are(String strArg1) throws Throwable {
    	System.out.println("Cards displayed are "+ strArg1);
    }
}