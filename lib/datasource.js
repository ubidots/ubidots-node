var util = require('util');

function Datasource(id, client) {
  this.id = id;
  this._client = client;
}

Datasource.prototype.getDetails = function getDetails(cb) {
  this._client._request({
    endpoint: util.format('datasources/%s', this.id)
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

Datasource.prototype.getVariables = function getVariables(cb) {
  this._client._request({
    endpoint: util.format('datasources/%s/variables', this.id)
  }, function (err, res, body) {
    if (err) return cb(err);

    cb(null, body);
  });
};

module.exports = Datasource;
