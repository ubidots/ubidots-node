var assert     = require('assert'),
    util       = require('util'),
    Client     = require('../lib/client'),
    Datasource = require('../lib/datasource'),
    apiKey     = process.env.UBIDOTS_API_TOKEN || '';

describe('Client', function () {
  var client = new Client(apiKey);
  var url = util.format('%s://%s', client.protocol, client.url);

  var expectedBody = {
    variables: url + '/variables',
    token: url + '/auth/token',
    datasources: url + '/datasources'
  };

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

  describe('#getDatasource', function () {
    it('should return a datasource', function () {
      var datasource = client.getDatasource('xxxx');

      assert.ok(datasource instanceof Datasource);
      assert.ok(datasource.id === 'xxxx');
    });
  });

  describe('#getDatasources', function () {
    it('should get all datasources', function (done) {
      client.getDatasources(function (err, datasources) {
        assert.ok(!err);
        assert.ok(Array.isArray(datasources));
        done();
      });
    });
  });

  describe('#createDatasource', function () {
    it('should create a new datasource');
  });

  describe('#_request', function () {

    it('should contain a request method', function () {
      assert.ok(typeof client._request === "function");
    });

    it('should request Ubidots api', function (done) {
      client._request({
        endpoint: ''
      }, function (err, res, body) {
        assert.ok(!err);
        assert.ok(body);
        assert.deepEqual(body, expectedBody);
        done();
      });
    });
  });
});
