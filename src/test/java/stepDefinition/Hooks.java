package stepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before("@MobileTest")
	private void beforeValidation() {
		System.out.println("before Mobile hook");

	}
	@After("@MobileTest")
	public void afterValidation() {
		System.out.println("after Mobile hook");
	}

	@Before("@WebTest")
	private void beforeWebValidation() {
		System.out.println("before Web hook");

	}
	@After("@WebTest")
	public void afterWebValidation() {
		System.out.println("after Web hook");
	}
	
	@Before("@PortalTest")
	private void beforePortalValidation() {
		System.out.println("before Portal hook");

	}
}
