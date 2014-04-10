var Client = require('./client')

var ubidots = exports;

ubidots.createClient = function createClient(opts) {
  return new Client(opts);
};
