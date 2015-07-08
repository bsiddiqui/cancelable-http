'use strict';

module.exports = config;
config.$inject = ['$httpProvider'];

function config ($httpProvider) {
  $httpProvider.interceptors.push('CancelableHttpService');
};
