$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Account.feature");
formatter.feature({
  "line": 1,
  "name": "Portal Login",
  "description": "",
  "id": "portal-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User login into application with \"cion\" and \"123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 206893900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cion",
      "offset": 34
    },
    {
      "val": "123",
      "offset": 45
    }
  ],
  "location": "stepDefinition.user_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "duration": 5649800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 223700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User login into application with \"admin\" and \"xyz\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 1273000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 34
    },
    {
      "val": "xyz",
      "offset": 46
    }
  ],
  "location": "stepDefinition.user_login_into_application_with_something_and_something(String,String)"
});
formatter.result({
  "duration": 185800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 73400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 121900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User sign up with the followind detailes",
  "rows": [
    {
      "cells": [
        "cristian",
        "ion",
        "cristi@abc.com",
        "Romania",
        "3223213"
      ],
      "line": 23
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 1186700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.user_sign_up_with_the_followind_detailes(DataTable)"
});
formatter.result({
  "duration": 1924900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 65200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 329400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User log in into application with \u003cUsername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "portal-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 36,
      "id": "portal-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 37,
      "id": "portal-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 38,
      "id": "portal-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 39,
      "id": "portal-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "user4",
        "pass4"
      ],
      "line": 40,
      "id": "portal-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User log in into application with user1 and pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 112100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 34
    },
    {
      "val": "pass1",
      "offset": 44
    }
  ],
  "location": "stepDefinition.user_log_in_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 196700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 71100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 116200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User log in into application with user2 and pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 85600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 34
    },
    {
      "val": "pass2",
      "offset": 44
    }
  ],
  "location": "stepDefinition.user_log_in_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 423300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 251300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 285700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User log in into application with user3 and pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 88600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 34
    },
    {
      "val": "pass3",
      "offset": 44
    }
  ],
  "location": "stepDefinition.user_log_in_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 341300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 109500,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Home page default login",
  "description": "",
  "id": "portal-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@PortalTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User log in into application with user4 and pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user4",
      "offset": 34
    },
    {
      "val": "pass4",
      "offset": 44
    }
  ],
  "location": "stepDefinition.user_log_in_into_application_with_and(String,String)"
});
formatter.result({
  "duration": 185100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.home_page_is_populated()"
});
formatter.result({
  "duration": 66800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 21
    }
  ],
  "location": "stepDefinition.cards_displayed_are(String)"
});
formatter.result({
  "duration": 229700,
  "status": "passed"
});
});