var util = require('util');

function Datasource(id, client) {
  this.id = id;
  this._client = client;
}

Datasource.prototype.getDetails = function getDetails(cb) {

  if (typeof cb !== 'function') {
    throw new Error('Must provide a callback');
  }

  this._client._request({
    endpoint: "datasources/" + this.id
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

Datasource.prototype.getVariables = function getVariables(cb) {

  if (typeof cb !== 'function') {
    throw new Error('Must provide a callback');
  }

  this._client._request({
    endpoint: "datasources/" + this.id + "/variables"
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

module.exports = Datasource;
