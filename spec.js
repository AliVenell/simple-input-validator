var checker = require('./checks.js');

describe('Login test', function() {
	
	beforeEach(function() {
	});

   it('Should login', function() {
    //console.log('test spec: ' + browser.params.testAttackVectors);
    for (vector of browser.params.testAttackVectors) {
    	console.log(vector);
    	console.log("Checker: " + checker.checkVector(vector, 80));	

    }
    //console.log(checker.checkLegalCharacters("asdfasdf"));

    // EXAMPLE TEST
	// browser.driver.get('http://www.google.fi');
 	// expect(browser.driver.getTitle()).toEqual('Google');
 	// browser.driver.findElement(by.name('login.username')).sendKeys('user1');
	// browser.driver.findElement(by.name('login.password')).sendKeys('passwd1');
	// browser.driver.findElement(by.id('login-button')).click();
     
 	// 	expect(element(by.css('.afterlogin'))
 	//   		.getText()).toEqual('Login successful');
  });
  
});