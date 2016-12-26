var seleniumWebdriver = require('selenium-webdriver');
var {until,By} = require('selenium-webdriver');
var {By:by} = require('protractor').ProtractorBrowser;
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
	Given('I am on the Cucumber.js GitHub repository', function() {
		var driver = this.driver;
		var wb = this.wb;
		driver.ignoreSynchronization = true;
		driver.get('https://cdm.ciodev.accenture.com');
		driver.wait(until.titleIs('Sign In'));
		driver.element(by.id('userNameInput')).sendKeys('ds\\tac.testid001');
		driver.element(by.id('passwordInput')).sendKeys('hT9a3Vl06gM1kC4yX5cS');
		return driver.element(by.id('submitButton')).click();
	});

	When('I click on {stringInDoubleQuotes}', function(text) {
		var EC = this.driver.ExpectedConditions;
		this.driver.ignoreSynchronization = false;
		return this.driver.wait(EC.titleIs('Contract Documents Library'));
	});

	Then('I should see {stringInDoubleQuotes}', function(text, callback) {
		var driver = this.driver;
		var element = driver.element;
		var EC = driver.ExpectedConditions;

		driver.wait(EC.visibilityOf(element(by.id('notificationsModal'))))
			.then(function() {
				element(by.id('notificationsModal'))
					.element(by.tagName('button'))
					.click();
			});
	});
});