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
    $scope.toDoList = [];

    $scope.addTodo = function() {
    	$scope.toDoList.push($scope.todo);
    	$scope.todo = ' ';
    };

    $scope.removeToDo = function(index) {
    	$scope.toDoList.splice(index, 1);
    };
  });
