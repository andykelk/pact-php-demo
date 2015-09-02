var example = example || {};

(function() {

  var localBaseUrl;

  this.createClient = function(baseUrl) {
    localBaseUrl = baseUrl;
    return this;
  };

  this.getAlligatorByName = function(name) {
    //Makes a synchronous request
    var xhr = new XMLHttpRequest();
    xhr.open('GET', localBaseUrl + '/alligators/' + name, false);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();

    return new Alligator(JSON.parse(xhr.responseText).name);
  };
}).apply(example);
