var Client = require('../lib/client'),
    assert = require('assert'),
    util   = require('util'),
    apiKey = process.env.UBIDOTS_API_TOKEN;

var client = new Client(apiKey);
var url = util.format('%s://%s', client.protocol, client.url);

var expectedBody = {
  variables: url + '/variables',
  token: url + '/auth/token',
  datasources: url + '/datasources'
};

describe('Client', function () {

  describe('#auth', function () {

    it('should contain an auth method', function () {
      assert.ok(typeof client.auth === "function");
    });

    it('should authenticate', function (done) {
      client.auth(function () {
        assert.ok(this.token);
        done();
      });
    });
  });

  describe('#_request', function () {

    it('should contain a request method', function () {
      assert.ok(typeof client._request === "function");
    });

    it('should request Ubidots api', function (done) {
      client._request({
        endpoint: ''
      }, function (err, res, body) {
        assert.ok(!!!err);
        assert.ok(body);
        assert.deepEqual(body, expectedBody);
        done();
      });
    });
  });
});
