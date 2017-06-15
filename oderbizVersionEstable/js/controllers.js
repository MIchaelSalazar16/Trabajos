var ctrl = angular.module('oderbizApp.controllers', []);

ctrl.controller('homeCtrl', ['$scope', function($scope) {
  $scope.message = 'Hola!';
}]);