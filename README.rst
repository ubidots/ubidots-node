===================================
Ubidots Node API Client
===================================

Node.js API Client for `Ubidots <http://www.ubidots.com>`

**This is a work in progress and needs further testing**

Install
--------

.. code-block:: bash

    $ npm install ubidots


Usage
------

.. code-block:: js

    var ubidots = require('ubidots');
    
    var client = ubidots.createClient('YOUR-API-KEY');
    
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


