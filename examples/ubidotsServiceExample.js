const ubidots = require('ubidots');
const client = ubidots.createClient('PUT_API_TOKEN_HERE');

/**
 * Returns DataSource list
 */
function getDataSources() {
    return new Promise(function (resolve, reject) {
        client.auth(function () {
            this.getDatasources(function (err, data) {
                if (err) { reject(err); }
                resolve(data.results);
            });
        });
    });
}

/**
 * 
 * @param {string} datasourceId 
 */
function getDataSource(datasourceId) {
    return new Promise(function (resolve, reject) {
        client.auth(function () {
            const result = this.getDatasource(datasourceId);
            resolve(result);
        });
    });
}

/**
 * 
 * @param {string} datasourceId 
 */
function getDataSourceVariables(datasourceId) {
    return new Promise(function (resolve, reject) {
        client.auth(function () {
            const result = this.getDatasource(datasourceId);
            result.getVariables(function (err, data) {
                if (err) { reject(err); }
                resolve(data.results);
            });
        });
    });
}

/**
 * 
 * @param {string} datasourceId 
 */
function getDataSourceDetails(datasourceId) {
    return new Promise(function (resolve, reject) {
        client.auth(function () {
            const result = this.getDatasource(datasourceId);
            result.getDetails(function (err, details) {
                if (err) { reject(err); }
                resolve(details);
            });
        });
    });
}

/**
 * 
 * @param {string} variableId 
 */
function getVariable(variableId) {
    return new Promise(function (resolve, reject) {
        client.auth(function () {
            const variable = this.getVariable(variableId);
            resolve(variable);
        });
    });
}

/**
 * 
 * @param {string} variableId 
 */
function getVariableDetails(variableId) {
    return new Promise(function (resolve, reject) {
        client.auth(function () {
            const variable = this.getVariable(variableId);
            variable.getDetails(function (err, details) {
                resolve(details);
            });
        });
    });
}

/**
 * 
 * @param {string} variableId 
 * @param {number} value 
 */
function saveVariableValue(variableId, value) {
    return new Promise(function (resolve, reject) {
        client.auth(function () {
            const variable = this.getVariable(variableId);
            variable.saveValue(value);
            resolve(true);
        });
    });
}

/**
 * 
 * @param {string} variableId 
 */
function getValuesFromVariable(variableId) {
    return new Promise(function (resolve, reject) {
        client.auth(function () {
            const variable = this.getVariable(variableId);
            variable.getValues(function (err, data) {
                if (err) { reject(err); }
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
