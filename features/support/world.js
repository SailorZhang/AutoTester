require('chromedriver');
const seleniumWebdriver = require('selenium-webdriver');
const {defineSupportCode} = require('cucumber');
const protractor = require('protractor');
const {By:by} = require('protractor').ProtractorBrowser;
const {until} = require('selenium-webdriver');

function CustomWorld() {

	var driver = new seleniumWebdriver.Builder()
		.forBrowser('chrome')
		.build();

	driver.manage().timeouts().setScriptTimeout(11000);

	this.wb = driver;
	this.driver = protractor.wrapDriver(driver);

	// this.driver.ignoreSynchronization = true;
	// this.by = ProtractorBrowser.By;
	
	this.login = function(username='ds\\tac.testid001',password='pN3o69k47f2Og10qU5x5') {
		var EC = this.driver.ExpectedConditions;
		this.driver.ignoreSynchronization = true;
		this.driver.get('https://cdm.ciodev.accenture.com');
		this.driver.wait(until.titleIs('Sign In'));
		this.driver.element(by.id('userNameInput')).sendKeys(username);
		this.driver.element(by.id('passwordInput')).sendKeys(password);
		this.driver.element(by.id('submitButton')).click();

		this.driver.ignoreSynchronization = false;
		return this.driver.wait(EC.titleIs('Contract Documents Library'));
	}
}

defineSupportCode(function({setWorldConstructor}) {
	setWorldConstructor(CustomWorld)
})