'use strict';

/**
 * @ngdoc function
 * @name codeLabApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeLabApp
 */
angular.module('codeLabApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var todosInStore = localStorageService.get('toDoList');

    $scope.toDoList = todosInStore && todosInStore.split('\n') || [];
    $scope.$watch('toDoList', function() {
    	localStorageService.add('toDoList', $scope.toDoList.join('\n'));
    }, true);

    $scope.addTodo = function() {
    	$scope.toDoList.push($scope.todo);
    	$scope.todo = ' ';
    };

    $scope.removeToDo = function(index) {
    	$scope.toDoList.splice(index, 1);
    };
  });
