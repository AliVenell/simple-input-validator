
describe('Login test', function() {

	beforeEach(function() {
		
	});

   it('Should login', function() {
    
	browser.driver.get('http://www.google.fi');
   	expect(browser.driver.getTitle()).toEqual('Google');
  	browser.driver.findElement(by.name('login.username')).sendKeys('user1');
	browser.driver.findElement(by.name('login.password')).sendKeys('passwd1');
	browser.driver.findElement(by.id('login-button')).click();
     
   	expect(element(by.css('.afterlogin'))
   		.getText()).toEqual('Login successful');
  });

  
});