require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var protractor = require('protractor');
var {By:by} = require('protractor').ProtractorBrowser;
var {until} = require('selenium-webdriver');

function CustomWorld() {

	var driver = new seleniumWebdriver.Builder()
		.forBrowser('chrome')
		.build();

	driver.manage().timeouts().setScriptTimeout(11000);

	this.wb = driver;
	this.driver = protractor.wrapDriver(driver);

	// this.driver.ignoreSynchronization = true;
	// this.by = ProtractorBrowser.By;
	
	this.login = function(userName='ds\\tac.testid001',password='hT9a3Vl06gM1kC4yX5cS') {
		var EC = this.driver.ExpectedConditions;
		this.driver.ignoreSynchronization = true;
		this.driver.get('https://cdm.ciodev.accenture.com');
		this.driver.wait(until.titleIs('Sign In'));
		this.driver.element(by.id('userNameInput')).sendKeys(userName);
		this.driver.element(by.id('passwordInput')).sendKeys(password);
		this.driver.element(by.id('submitButton')).click();

		this.driver.ignoreSynchronization = false;
		return this.driver.wait(EC.titleIs('Contract Documents Library'));
	}
}

defineSupportCode(function({setWorldConstructor}) {
	setWorldConstructor(CustomWorld)
})