var ubidots = require('../'),
    Client = require('../lib/client'),
    assert = require('assert');

describe('ubidots', function () {

  describe('#createClient', function () {
    var client = ubidots.createClient("anApiKey");

    it('should create an api client', function () {
      assert.ok(client instanceof Client);
      assert.ok(client.apiKey === "anApiKey");
    });

  });

});
