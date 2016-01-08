var checker = require('./checks.js');

describe('Simple input validation', function() {
	
	beforeEach(function() {
	});

   it('Should login', function() {

    // EXAMPLE LOGIN
    // browser.driver.get('https://www.hackthissite.org/');
 	  // expect(browser.driver.getTitle()).toEqual('Hack This Site!');
 	  // browser.driver.findElement(by.name('username')).sendKeys('user1');
    // browser.driver.findElement(by.name('password')).sendKeys('passwd1');
    // browser.driver.findElement(by.name('btn_submit')).click();

    // 	expect(element(by.css('.afterlogin'))
    //   		.getText()).toBe('Login successful');
  });

  it('Should loop the tests steps with input payloads', function() {
    // EXAMPLE CODE
    // var nameDefaultValue = 'John Doe';
    // var nameMaxLength = 50;
    // var nameRegexpPattern = '^[a-zA-Z]+$'
    // var addressDefaultValue = '100 MAIN ST';
    // var addressMaxLength = 50;
    // var addressRegexpPattern = '^[a-zA-Z0-9]+$'



   for (vector of browser.params.testAttackVectors) {      
      console.log("Starting test iteration: " + vector);
      // EXAMPLE CODE 
      // Check whether the attack vector can be input to name input field.
      // Otherwise, use legal default value.
      // if (checker.checkVector(vector, nameMaxLength, nameRegexPattern)) {
      //   element(by.css('input.name')).sendKeys(vector);
      // } else {
      //   element(by.css('input.name')).sendKeys(nameDefaultValue);
      // }

      // Check whether the attack vector can be input to address input field.
      // Otherwise, use legal default value.
      // if (checker.checkVector(vector, addressMaxLength, addressRegexPattern)) {
      //   element(by.css('input.address')).sendKeys(vector);
      // } else {
      //   element(by.css('input.address')).sendKeys(addressDefaultValue);
      // }

      // Click next page (so far that the values are written to the database)
      // element(by.css('button.submit-button')).click();

      // Expect handled behavior after attack is done.
      // expect(element(by.css('title')).getText()).toBe('Next page title');

      // Return back to the initial web page for the next iteration.
      // element(by.css('button.back-button')).click();      
    }
  });
  
})