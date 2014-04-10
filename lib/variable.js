var util = require('util');

function Variable(id, client) {
  this.id = id;
  this._client = client;
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
  this._client._request({
    method: 'POST',
    endpoint: util.format('variables/%s/values', this.id),
    params: { value: value }
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null);
  });
};

module.exports = Variable;
