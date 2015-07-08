'use strict';

var angular         = require('angular');
var httpConfig      = require('./http-config.js');
var httpService     = require('./http-service.js');
var httpInterceptor = require('./http-interceptor.js');

module.exports = angular
  .module('cancelableHttp', [])
  .config(httpConfig)
  .service('CancelableHttpService', httpService)
  .factory('CancelableHttpInterceptor', httpInterceptor)
