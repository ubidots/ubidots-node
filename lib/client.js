var request    = require('request'),
    util       = require('util'),
    config     = require('./config'),
    Datasource = require('./datasource'),
    Variable   = require('./variable');

function Client(opts) {

  if (typeof opts === "string") {
    this.apiKey = opts;
  } else {
    this.apiKey = opts.apiKey;
  }

  this.token = opts.token || null;
  this.url = opts.url || config.url;
  this.protocol = opts.protocol || config.protocol;
}

Client.prototype.auth = function auth(cb) {

  if (typeof cb !== 'function') {
    throw new Error('Must provide a callback');
  }

  this._request({
    method: 'POST',
    endpoint: 'auth/token',
    headers: { "X-Ubidots-ApiKey": this.apiKey }
  }, (function (err, res, body) {
    if (err) return cb(err);

    if(body && body.token) {
      this.token = body.token;
      return cb.call(this, null);
    }

    return cb.call(this, null);
  }).bind(this));
};

Client.prototype.getVariable = function getVariable(id) {
  return new Variable(id, this);
};

Client.prototype.getDatasource = function getDatasource(id) {
  return new Datasource(id, this);
};

Client.prototype.getDatasources = function getDatasources(cb) {

  if (typeof cb !== 'function') {
    throw new Error('Must provide a callback');
  }

  this._request({
    endpoint: 'datasources'
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

Client.prototype._request = function _request(opts, cb) {
  var url = this.protocol + "://" + this.url + "/" + opts.endpoint;
  var headers = opts.headers || {};

  if (this.token) {
    headers['X-Auth-Token'] = this.token;
  }

  request({
    url: url,
    method: opts.method || 'GET',
    body: opts.params || {},
    headers: headers,
    json: true
  }, function (err, res, body) {
    cb(err, res, body);
  });
};

module.exports = Client;
