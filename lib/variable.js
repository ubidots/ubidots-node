var util = require('util');

function Variable(id, client) {
  this.id = id;
  this._client = client;
};

Variable.prototype.getDetails = function getDetails(cb) {
  this._client._request({
    endpoint: util.format('variables/%s', this.id)
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

Variable.prototype.getValues = function getValues(cb) {
  this._client._request({
    endpoint: util.format('variables/%s/values', this.id)
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

Variable.prototype.saveValue = function saveValue(value, cb) {
  var params = {};

  if (typeof value === 'object' && value.hasOwnProperty('value')) {
    params = value;
  } else {
    params.value = value;
  }

  this._client._request({
    method: 'POST',
    endpoint: util.format('variables/%s/values', this.id),
    params: params
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

module.exports = Variable;
