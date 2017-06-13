var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when("/servicios/", {
    templateUrl : "servicios/IdentVisual.html",
    controller  : "IdentVisualCtrl"
    })
    .when("/DesignWeb", {
    templateUrl : "servicios/desingWeb.html",
    controller  : "desingWebCtrl"
    })
    .when("/SocialMediaManagment", {
    templateUrl : "servicios/sociMedMag.html",
    controller  : "sociMedMagCtrl"
    })
    .when("/EmailMarketing", {
    templateUrl : "servicios/emarketing.html",
    controller  : "emarketingCtrl"
    })
    .when("/CommunityManager", {
    templateUrl : "servicios/communityManager.html",
    controller  : "communityManagerCtrl"
  })
    .otherwise({redirectTo: '/servicios/'});
}]);

app.controller('IdentVisualCtrl', ['$scope', function($scope) {
    document.getElementById('matrix').src="img/subP/ideVis.jpg"
    $scope.msg = "IDENTIDAD VISUAL";
}]);

app.controller('desingWebCtrl', ['$scope', function($scope) {
    document.getElementById('matrix').src="img/subP/disWeb.jpg"
    $scope.msg = "desing Web";
}]);

app.controller('emarketingCtrl', ['$scope', function($scope) {
    document.getElementById('matrix').src="img/subP/eMark.jpg"
    $scope.msg = "emarketing";
}]);

app.controller('communityManagerCtrl', ['$scope', function($scope) {
    document.getElementById('matrix').src="img/subP/comMana.jpg"
    $scope.msg = "communityManager";
}]);

app.controller('sociMedMagCtrl', ['$scope', function($scope) {
    document.getElementById('matrix').src="img/subP/sociMedMag.jpg"
    $scope.msg = "sociMedMag";
}]);
//Copyright © 2017 | Oderbiz
