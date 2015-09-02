require 'pact/provider/proxy/tasks'

Pact::ProxyVerificationTask.new :alligator do | task |
 task.pact_url './spec/pacts/alligator_consumer-alligator_provider.json', :pact_helper => './spec/support/alligator_pact_helper' 
 task.provider_base_url 'http://localhost:8000'
end

require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec)

task :default => [:spec, 'pact:verify:alligator']

