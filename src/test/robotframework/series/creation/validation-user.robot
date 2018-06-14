*** Settings ***
Documentation    Verify series creation validation scenarios from a user
Library          Selenium2Library
Resource         ../../auth.steps.robot
Suite Setup      Before Test Suite
Suite Teardown   After Test Suite
Force Tags       series  validation

*** Test Cases ***
Create series with empty required fields
	[Documentation]                  Verify validation of mandatory fields
	Submit Form                      id=add-series-form
	Element Text Should Be           id=category.errors  Value must not be empty
	Element Text Should Be           id=quantity.errors  Value must not be empty
	Element Text Should Be           id=image.errors     Value must not be empty
	Page Should Not Contain Element  id=image-url.errors

*** Keywords ***
Before Test Suite
	[Documentation]                     Login as a user and go to create series page
	Open Browser                        ${SITE_URL}  ${BROWSER}
	Register Keyword To Run On Failure  Log Source
	Log In As                           login=coder  password=test
	Go To                               ${SITE_URL}/series/add

After Test Suite
	[Documentation]  Log out and close browser
	Log Out
	Close Browser
