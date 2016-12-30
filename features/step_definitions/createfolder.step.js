const seleniumWebdriver = require('selenium-webdriver');
const {until,By} = require('selenium-webdriver');
const {By:by} = require('protractor').ProtractorBrowser;
const {defineSupportCode} = require('cucumber');
const moment = require('moment');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const should = require('chai').should();
const {expect} = require('chai');

chai.use(chaiAsPromised);

defineSupportCode(function({Given, When, Then}) {
	let folderName;
	let count = 0;
	let driver;
	let element;
	let EC;

	function createFolder(){
		driver.wait(EC.elementToBeClickable(driver.$$('.cdmRecords-button').get(1)));
		driver.$$('.cdmRecords-button').get(1).click();
		folderName = "Auto" + moment().format("YYYYMMDDhmmssSSS");
		element.all(by.model('newFolderName')).get(1).sendKeys(folderName);

		element.all(by.name('newFolderForm')).get(1).element(by.partialButtonText('OK')).click();
		return driver.wait(EC.elementToBeClickable(element(by.repeater('record in filteredRecords').row(0))));
	}

	Given('I login CDL, I choose a contract.', function() {
		this.login();
		driver = this.driver;
		element = driver.element;
		EC = driver.ExpectedConditions;
		
		var closeButton = element(by.id('notificationsModal')).element(by.tagName('button'));
		driver.wait(EC.elementToBeClickable(closeButton));
		closeButton.click();

		driver.wait(EC.invisibilityOf(element(by.id('notificationsModal'))));
		return element(by.linkText('Favorite Contract Libraries')).click();
	});

	When('I click on NewFolder button, and input folder name, click OK.', function() {
		driver.wait(EC.elementToBeClickable(element(by.repeater('record in home.viewData').row(0))));
		element(by.repeater('record in home.viewData').row(0)).click();
		element.all(by.repeater('record in filteredRecords')).count().then(function(c) {
			count = c;
		});
		return createFolder();
	});

	Then('I should see the input name of folder and total files count increase {arg1:int}.'
		, function(increase,callback) {
		element.all(by.repeater('record in filteredRecords')).count().then(function(c) {
			expect(c).to.equal(count + increase);
		});

		var xpath = "//div[text()='" + folderName + "']";

		expect(element(by.xpath(xpath)).getText()).eventually.equal(folderName).notify(callback);
	});

	When('I create a folder, I open this new folder, the new folder files count is {arg1:int}.'
		, function(arg1) {

		driver.wait(EC.elementToBeClickable(element(by.repeater('record in home.viewData').row(0))));
		element(by.repeater('record in home.viewData').row(0)).click();

		createFolder();

		var xpath = "//div[text()='" + folderName + "']";

		var ele = element(by.xpath(xpath));
		driver.actions().mouseMove(ele).doubleClick().perform();

		return element.all(by.repeater('record in filteredRecords')).count().then(function(c) {
			expect(c).to.equal(arg1);
		});
	});

	When('I create a sub folder in the new folder.',function(){
		return createFolder();
	});

	Then('I should see the sub folder in the new folder and files count is {arg1:int}.',function(arg1,callback){
		var xpath = "//div[text()='" + folderName + "']";

		element.all(by.repeater('record in filteredRecords')).count().then(function(c) {
			expect(c).to.equal(arg1);
		});

		expect(element(by.xpath(xpath)).getText()).eventually.equal(folderName).notify(callback);
	})

});