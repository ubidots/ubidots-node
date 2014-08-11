var util = require('util');

function Variable(id, client) {
  this.id = id;
  this._client = client;
}

Variable.prototype.getDetails = function getDetails(cb) {

  if (typeof cb !== 'function') {
   throw new Error('Must provide a callback');
  }

  this._client._request({
    endpoint: "variables/" + this.id
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

Variable.prototype.getValues = function getValues(cb) {

  if (typeof cb !== 'function') {
   throw new Error('Must provide a callback');
  }

  this._client._request({
    endpoint: "variables/" + this.id + "/values"
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
    endpoint: "variables/" + this.id + "/values",
    params: params
  }, function (err, res, body) {
    if (typeof cb === 'function') {
      if (err) return cb(err);

      cb(null, body);
    } else {
      if (err) throw err;
    }
  });
};

module.exports = Variable;
