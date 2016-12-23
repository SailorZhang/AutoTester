var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
	Given('I am on the Cucumber.js GitHub repository', function() {
		return this.driver.get('https://docs.angularjs.org/api',1000);
		// return this.driver.get('http://juliemr.github.io/protractor-demo/');


		// this.driver.getCurrentUrl().then(callback);
	});

	When('I click on {stringInDoubleQuotes}', function(text) {

		// return this.driver.element(this.by.repeater('navItem in navGroup.navItems').row(0)).click();

		// return this.driver.element(this.by.model('q')).sendKeys(123456);
		// this.driver.element(this.by.model('first')).sendKeys(1);
		// this.driver.element(this.by.model('second')).sendKeys(2);

		// return this.driver.element(this.by.buttonText('Go!')).click();
		// var loc = this.by.linkText(text);
		// console.log(loc);
		// var ele = this.driver.element(loc);
		// ele.getTagName().then(function(name){
		// 	console.log(name);
		// 	callback();
		// });
		// ele.click().then(callback);
		// console.log(this.by.linkText(text));
		return this.driver.driver.findElement({
			linkText: text
		}).then(function(element) {
			return element.click();
		});
	});

	Then('I should see {stringInDoubleQuotes}', function(text) {
		var xpath = "//*[contains(text(),'" + text + "')]";
		var condition = seleniumWebdriver.until.elementLocated({
			xpath: xpath
		});
		return this.driver.wait(condition, 50000);
	});
});

defineSupportCode(function({Given, When, Then}) {
	Given('I want to open baidu website', function(callback) {
		// Write code here that turns the phrase above into concrete actions
		callback();
	});

	When('I visit {stringInDoubleQuotes}', function(url) {
		// Write code here that turns the phrase above into concrete actions
		this.driver.ignoreSynchronization = true;
		return this.driver.get(url);
	});

	Then('I should see {arg1:stringInDoubleQuotes} as page title', function(arg1) {
		this.driver.ignoreSynchronization = false;
		// this.driver.getTitle().then(function(t){
		// 	console.log(t);
		// 	callback();
		// });
		return this.driver.wait(seleniumWebdriver.until.titleIs(arg1))
			// Write code here that turns the phrase above into concrete actions
	});
});