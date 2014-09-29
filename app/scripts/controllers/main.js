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
    $scope.toDoList = [
    	'Item 1',
    	'Item 2',
    	'Item 3',
    	'Item 4'
    ];

    $scope.addTodo = function() {
    	$scope.toDoList.push($scope.todo);
    	$scope.todo = ' ';
    };
  });
