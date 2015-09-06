# pact-php-demo
Demo code from the talk on Consumer-Driven Contract testing with Pact and PHP

## How to use (consumer)
First, set up the consumer:
* Install Ruby and RubyGems
* Install Node and npm
* Install dependencies: `npm install`
* Install bower: `npm install -g bower`
* Install karma: `npm install karma karma-jasmine --save-dev`
* Install karma cli: `npm install -g karma-cli`
* Install pact: `bower install pact-consumer-js-dsl --save-dev`
* Run the pact service: `bundle exec pact-mock-service -p 1234 -l log/pact.logs --pact-dir tmp/pacts`
* Run the tests (in another terminal): `karma start`
* Your pact file is now in `tmp/pacts`

## How to use (provider)
Then set up the provider:
* Install composer: `curl -sS https://getcomposer.org/installer | php`
* Install PHP dependencies: `php composer.phar install`
* Install pact: `bundle`
* Copy the pact file you just created into place: `cp ../consumer/tmp/pacts/alligator_consumer-alligator_provider.json ./spec/pacts/`
* Start up the API provider: `php -S localhost:8000`
* Now run pact to verify it works (in another terminal): `rake pact:verify:alligator`
