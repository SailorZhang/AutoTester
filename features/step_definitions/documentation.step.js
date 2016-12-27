var seleniumWebdriver = require('selenium-webdriver');
var {until,By} = require('selenium-webdriver');
var {By:by} = require('protractor').ProtractorBrowser;
var {defineSupportCode} = require('cucumber');
var moment = require('moment');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = require('chai').should();
var {expect} = require('chai');

chai.use(chaiAsPromised);

defineSupportCode(function({Given, When, Then}) {
	Given('I am on the Cucumber.js GitHub repository', function() {
		return this.login();
	});

	When('I click on {stringInDoubleQuotes}', function(text) {
		var driver = this.driver;
		var element = driver.element;
		var EC = driver.ExpectedConditions;

		driver.wait(EC.visibilityOf(element(by.id('notificationsModal'))));
		// .then(function() {
		element(by.id('notificationsModal'))
			.element(by.tagName('button'))
			.click();

		driver.wait(EC.invisibilityOf(element(by.id('notificationsModal'))));
		return element(by.linkText('Favorite Contract Libraries')).click();
	});

	Then('I should see {stringInDoubleQuotes}', function(text, callback) {
		var driver = this.driver;
		var element = driver.element;
		var EC = driver.ExpectedConditions;

		driver.wait(EC.elementToBeClickable(element(by.repeater('record in home.viewData').row(0))));
		element(by.repeater('record in home.viewData').row(0)).click();
		var count = 0;
		element.all(by.repeater('record in filteredRecords')).count().then(function(c) {
			count = c;
		});

		driver.$$('.cdmRecords-button').get(1).click();
		var folderName = "Auto" + moment().format("YYYYmmDDhmmssSSS");
		element.all(by.model('newFolderName')).get(1).sendKeys(folderName);

		element.all(by.name('newFolderForm')).get(1).element(by.partialButtonText('OK')).click();
		driver.wait(EC.elementToBeClickable(element(by.repeater('record in filteredRecords').row(0))));

		element.all(by.repeater('record in filteredRecords')).count().then(function(c) {
			// if (c != count + 2) {
			expect(c).to.equal(count + 2);
			// callback("create folder fail!");
			// }
		});

		var xpath = "//div[text()='" + folderName + "']";

		driver.findElement(by.xpath(xpath)).then(function(ele) {
			// driver.actions().mouseMove(ele).doubleClick().perform(); //double click
			// ele.click(); //click
			expect(ele.getText()).eventually.equal(folderName).notify(callback);
		});

		// callback();
	});
});