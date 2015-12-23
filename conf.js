var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
	//The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
 framework: 'jasmine2',
  
  onPrepare: function() {
    browser.driver.manage().window().maximize();

    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: 'testresults',
      filePrefix: 'reportXMLoutput'
    }));

    jasmine.getEnv().addReporter(
        new HtmlScreenshotReporter({
          dest: 'screenshots',
          filename: 'my-report.html',
          captureOnlyFailedSpecs: true
    }));
  },

 //Here we specify the name of the specs files.
  suites: {
  	healthcheck: 'spec.js',
    current: 'spec.js'
  },
  
  jasmineNodeOpts: {
  	showColors: true,
  	//realtimeFailure: true,
    //isVerbose: false
  }
	
};