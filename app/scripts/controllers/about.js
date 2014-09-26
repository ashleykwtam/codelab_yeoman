'use strict';

/**
 * @ngdoc function
 * @name codeLabApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codeLabApp
 */
angular.module('codeLabApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
