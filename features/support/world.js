require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var {ProtractorBrowser} = require('protractor');

function CustomWorld() {

	var driver = new seleniumWebdriver.Builder()
		.forBrowser('chrome')
		.build();

	driver.manage().timeouts().setScriptTimeout(11000);

	this.wb = driver;
	this.driver = protractor.wrapDriver(driver);
	// this.driver.ignoreSynchronization = true;
	this.by = ProtractorBrowser.By;


}

defineSupportCode(function({setWorldConstructor}) {
	setWorldConstructor(CustomWorld)
})