package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features/Account.feature",
		glue ="stepDefinition",tags="@PortalTest",strict=true,monochrome=true,
		plugin= {"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"})


//feature file
public class TestRunner {
	

}
