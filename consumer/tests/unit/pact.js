describe("Client", function() {
  var client, alligatorProvider;

  beforeEach(function() {
    client = ZooClient.createClient('http://localhost:1234');

    alligatorProvider = Pact.mockService({
      consumer: 'Alligator Consumer',
      provider: 'Alligator Provider',
      port: 1234,
      done: function (error) {
        expect(error).toBe(null);
      }
    });
  });

  it("should return an alligator", function(done) {
    alligatorProvider
      .given("an alligator with the name Mary exists")
      .uponReceiving("a request for an alligator")
      .withRequest("get", "/alligators/Mary", {
        "Accept": "application/json"
      }).willRespondWith(200, {
        "Content-Type": "application/json"
      }, {
        "name": "Mary"
      });

    alligatorProvider.run(done, function(runComplete) {
      expect(client.getAlligatorByName("Mary")).toEqual(new Alligator("Mary"));
      runComplete();
    });
  });
});
