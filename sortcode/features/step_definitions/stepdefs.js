
const assert = require('assert');
const { After, Given, When, Then } = require('cucumber');
const {Builder, By, Key, until} = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const webdriver = require('selenium-webdriver');
        let driver = new webdriver.Builder()
            .forBrowser('firefox')
            .build();




    When('I enter {string}', {timeout: 2 * 5000}, async function  (sortnumber1) {
        // Write code here that turns the phrase above into concrete actions
        await driver.get('https://www.sortcodes.co.uk');

        // const element = await driver.findElement(By.name('sortcode'));

        return  driver.findElement({name: "sortcode"}).sendKeys(sortnumber1);

    });
When('I enter {string} in account field', {timeout: 5 * 5000}, function (accountnumber) {
    driver.findElement({name: "account"}).sendKeys(accountnumber);
    driver.findElement({className: "trd-btn trd-btn-alt"}).click();
});
    Then('validator returns {string}', async function (corresponding_response) {
        // Write code here that turns the phrase above into concrete actions
        await driver.sleep(1000);
        // let result = await driver.findElement({className: "alert alert-danger"}).getText();
        let result = await driver.findElement({xpath: "//*[@id='form']/div"}).getText();
        assert.equal(result, corresponding_response,result +" is not matching " + corresponding_response);
        console.log(result);
    });


    When('As a user, I should be able validate sort code account number', function () {
      // Write code here that turns the phrase above into concrete actions
      return 'pending';
    });

After(function() {
    this.driver.quit();
});
Before(function() {
    // this.driver = new selenium.Builder().
    // withCapabilities(selenium.Capabilities.chrome()).
    // build();

    // this.driver.get(url).then(done);
});