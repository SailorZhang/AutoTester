const {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(600 * 1000);
});

defineSupportCode(function({After}) {
  After(function() {
    return this.driver.quit();
  });
});