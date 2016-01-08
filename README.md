# simple-input-validator

Simple input validator is a protractor test automation tool that uses FuzzDB's input payloads to use as an input values to web application's text fields.

# Installation #

- Install Protractor (e.g. npm install -g protractor)
- Install FuzzDB (git clone git@github.com:fuzzdb-project/fuzzdb.git fuzzdb)
- Install Protractor reporters. 
 1. npm install jasmine-reporters
 2. npm install protractor-jasmine2-screenshot-reporter --save-dev

# Writing Tests #

- Set FuzzDB's attack vector files as input's to be used (conf.js, attackVectorFiles). I warmly recommend you to go through all the attack vectors line by line.
- Define default strings for input fields (e.g. Name: John Smith)
- Define regular expression patterns that define legal characters ()
- Write test steps. Test steps go inside a for-loop of all the attack vectors. Test steps should go all the way to the writing the inputs to database or making transactions and then return back to the initial state for the next for-loop. More detailed instructions in the spec.js.
- Run the test. First runs will be probably good to run with pausing between iterations and visual inspection of what happens.
- Failed test cases are logged in:
 1. testresults folder (XML format)
 2. screenshots folder (my-report.html)

# Other information #

I take no responsibility of anything you do with simple-input-validator.

simple-input-validator created by Martti Venell (ali.venell@gmail.com)

FuzzDB was created by Adam Muntner (amuntner @ gmail.com). FuzzDB (c) Copyright Adam Muntner, 2010-2015

jasmine-reports, The MIT License Copyright (c) 2010 Larry Myers

protractor-jasmine2-screenshot-reporter created by Michal Lison (@mlison on npm)

TODO: 
Add package.json.
Get rid of for-looping.
Use protractor's test suites for running different attack vector files.




