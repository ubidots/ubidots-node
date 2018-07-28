===================================
Ubidots Node API Client
===================================

Node.js API Client for `Ubidots <http://www.ubidots.com>`_

https://github.com/ubidots/ubidots-node

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

Usage with Promises
--------------------

.. code-block:: js

    const ubidots = require('ubidots');
    const client = ubidots.createClient('PUT_API_KEY_HERE');

    function getDataSources(){
      return new Promise(function (resolve, reject){
        client.auth(function () {
          this.getDatasources(function (err, data) {
            if(err) { reject(err); }
            resolve(data.results);
          });
        });
      });  
    }

    function getDataSource(datasourceId){
      return new Promise(function (resolve, reject){
        client.auth(function () {
          const result = this.getDatasource(datasourceId);
          resolve(result);
        });
      });
    }


    function getDataSourceVariables(datasourceId){
      return new Promise(function (resolve, reject){
        client.auth(function () {
          const result = this.getDatasource(datasourceId);
          result.getVariables(function (err, data) {
            if(err) { reject(err); }
            resolve(data.results);
          });
        });
      });
    }

    function getDataSourceDetails(datasourceId){
      return new Promise(function (resolve, reject){
        client.auth(function () {
          const result = this.getDatasource(datasourceId);
          result.getDetails(function (err, details) {
            if(err) { reject(err); }
            resolve(details);
          });
        });
      });
    }

    function getVariable(variableId){
      return new Promise(function (resolve, reject){
        client.auth(function () {
          const variable = this.getVariable(variableId);
          resolve(variable);
        });
      });
    }

    function getVariableDetails(variableId){
      return new Promise(function (resolve, reject){
        client.auth(function () {
          const variable = this.getVariable(variableId);
          variable.getDetails(function (err, details) {
            resolve(details);
          });      
        });
      });
    }

    function saveVariableValue(variableId, value){
      return new Promise(function (resolve, reject){
        client.auth(function () {
          const variable = this.getVariable(variableId);
          variable.saveValue(value);
          resolve(true);
        });
      });
    }

    function getValuesFromVariable(variableId){
      return new Promise(function (resolve, reject){
        client.auth(function () {
          const variable = this.getVariable(variableId);
          variable.getValues(function (err, data) {
            if(err) { reject(err); }
            resolve(data.results);
          });
        });
      });
    }
    module.exports = {
      getDataSources,
      getDataSource,
      getDataSourceVariables,
      getDataSourceDetails,
      getVariable,
      getVariableDetails,
      saveVariableValue,
      getValuesFromVariable
    }


call function from other file
------------------------------

.. code-block:: js
    then you can call the file functions like that
    
    const ubidotsService = require("./ubitosService");
    const Rx = require("rxjs"); // if you want to use RxJs
    ubidotsService.getDataSources().then((result) => {
        console.log(result);
    });
    // with RxJs [OPTIONAL]
    Rx.Observable.defer(() => ubidotsService.getDataSources())
    .subscribe(
        (result) => { console.log(result) },
        (error) => { console.log(error) },
        () => { console.log("Finished!!") }
    )





