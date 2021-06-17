
# Deprecation announcement

This library will be no longer maintained by the Ubidots team, please consider using the native node HTTP requests library to send/retrieve data following our REST API specification.

# Ubidots Node API Client

Node.js API Client for [Ubidots](http://www.ubidots.com)

https://github.com/ubidots/ubidots-node

**This is a work in progress and needs further testing**

## Install

```
$ npm install ubidots
```

## Usage
```
var ubidots = require('ubidots');
var client = ubidots.createClient('YOUR-API-TOKEN');
    
    client.auth(function () {
      this.getDatasources(function (err, data) {
        console.log(data.results);
      });
    
      var ds = this.getDatasource('xxxxxxxx');
    
      ds.getVariables(function (err, data) {
        console.log(data.results);
      });
    
      ds.getDetails(function (err, details) {
        console.log(details);
      });
    
      var v = this.getVariable('xxxxxxx');
    
      v.getDetails(function (err, details) {
        console.log(details);
      });
    
      v.saveValue(22);
    
      v.getValues(function (err, data) {
        console.log(data.results);
      });
    });
```


##### You may find the examples with Promises and RxJs library [here](examples/)
