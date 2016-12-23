var seleniumWebdriver = require('selenium-webdriver');
var {until} = require('selenium-webdriver');
var {By} = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
	Given('I am on the Cucumber.js GitHub repository', function(callback) {
		var driver = this.driver;
		var wb = this.wb;
		this.driver.ignoreSynchronization = true;

		this.wb.get('https://cdm.ciodev.accenture.com');
		this.wb.wait(until.titleIs('Sign In'));
		this.wb.findElement(By.id('userNameInput')).then(function(ele){
			ele.sendKeys('ds\\tac.testid001');
		});

		this.wb.findElement(By.id('passwordInput')).then(function(ele){
			ele.sendKeys('hT9a3Vl06gM1kC4yX5cS');
		});

		this.wb.findElement(By.id('submitButton')).then(function(btn){
			btn.click();
			// wb.wait(until.elementIsVisible(driver.findElement(By.id('notificationsModal'))));
			callback();
		});

		// return this.driver.get('http://juliemr.github.io/protractor-demo/');


		// this.driver.getCurrentUrl().then(callback);
	});

	When('I click on {stringInDoubleQuotes}', function(text,callback) {

			this.wb.wait(until.titleIs('Contract Documents Library'));

			this.driver.getTitle().then(function(t)
			{
				console.log(t);
				callback();
			});
		// this.driver.wait(ExpectedConditions.visibilityOf($('#notificationsModal')),3000);

		// return $('button').click();
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
		// return this.driver.driver.findElement({
		// 	linkText: text
		// }).then(function(element) {
		// 	return element.click();
		// });
	});

	Then('I should see {stringInDoubleQuotes}', function(text,callback) {

		var condition = until.elementLocated({id:'notificationsModal'});
		this.wb.wait(condition);

		this.wb.findElement(By.id('notificationsModal')).then(function(a){
			a.getText(function(ttt){
				console.log(ttt);
			});
		})


		// this.wb.findElement(By.id('notificationFilter')).then(function(ddl){
		// 	ddl.click();
		// });

		// this.wb.findElement(By.id('notificationsModal')).findElement(By.css('button')).then(function(btnClose){
		// 	btnClose.click();
		// 	console.log('11111111111111');
		// });
		// var xpath = "//*[contains(text(),'" + text + "')]";
		// var condition = seleniumWebdriver.until.elementLocated({
		// 	xpath: xpath
		// });
		// return this.driver.wait(condition, 50000);
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