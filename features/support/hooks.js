const {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(600 * 1000);
});

defineSupportCode(function({After,Before}) {
  After(function() {
    return this.driver.quit();
  });
  Before('@Login',function(){
  	return this.login();
  });
});