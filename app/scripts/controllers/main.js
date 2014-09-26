'use strict';

/**
 * @ngdoc function
 * @name codeLabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeLabApp
 */
angular.module('codeLabApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
