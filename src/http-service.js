'use strict';

module.exports      = httpService;
httpService.$inject = ['$q'];

function httpService ($q) {
  var cancelablePromises = [];

  var CancelableHttpService = {};

  CancelableHttpService.cancelablePromise = function () {
    var cancelablePromise = $q.defer();
    cancelablePromises.push(cancelablePromise);
    return cancelablePromise.promise;
  };

  CancelableHttpService.cancelAll = function () {
    angular.forEach(cancelablePromise, function (cancelPromise) {
      cancelPromise.resolve();
    });

    cancelablePromises = [];
  };

  return CancelableHttpService;
};
