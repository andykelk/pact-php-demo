# pact-php-demo
Demo code from the talk on Consumer-Driven Contract testing with Pact and PHP

## Dependencies
* I tested this on a clean Centos 7 minimal installation. There's a few packages you'll need to install:
  * `sudo yum install fontconfig bzip2 wget php ruby rubygems`
  * Install EPEL: http://www.tecmint.com/how-to-enable-epel-repository-for-rhel-centos-6-5/
  * `sudo yum install npm`

## How to use (consumer)
First, set up the consumer:
* Install Ruby and RubyGems (and ruby header files)
* Install Node and npm
* Make sure you're in the `consumer` directory
* Install dependencies: `npm install`
* Install karma cli: `sudo npm install -g karma-cli`
* Install bower: `sudo npm install -g bower`
* Install pact JavaScript component: `bower install`
* Install bundler: `gem install bundler`
* Install pact ruby component: `bundle install`
* Run the pact service: `bundle exec pact-mock-service -p 1234 -l log/pact.logs --pact-dir tmp/pacts`
* Run the tests (in another terminal): `karma start`
* Your pact file is now in `tmp/pacts`

## How to use (provider)
Then set up the provider:
* Make sure you're in the `provider` directory
* Install composer: `curl -sS https://getcomposer.org/installer | php`
* Install PHP dependencies: `php composer.phar install`
* Install pact: `bundle install`
* Install rake: `gem install rake`
* Copy the pact file you just created into place: `cp ../consumer/tmp/pacts/alligator_consumer-alligator_provider.json ./spec/pacts/`
* Start up the API provider: `php -S localhost:8000`
* Now run pact to verify it works (in another terminal): `rake pact:verify:alligator`
