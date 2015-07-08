'use strict';

module.exports          = httpInterceptor;
httpInterceptor.$inject = ['$q', 'CancelableHttpService'];

function httpInterceptor ($q, CancelableHttpService) {
  return {
    request: function (config) {
      if (config && config.timeout === undefined) {
        config.timeout = CancelableHttpService.cancelablePromise();
      }

      return config;
    }
  };
};
