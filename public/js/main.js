var app = angular.module("myDogs", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: "WelcomeController",
        templateUrl: "templates/welcome/index.html"
    })
    $routeProvider.when('/dogs', {
        controller: "DogsController",
        templateUrl: "templates/dogs/index.html"
    })
    $routeProvider.when('/dogs/:id', {
        controller: "DogsController",
        templateUrl: "templates/dogs/index.html"
    })
    .otherwise({ redirectTo: '/' })
});

app.controller("DogsController", function ($scope, $routeParams) {
    $scope.dogs = {
        'boira': {
            name: "Boira"
        },
        'dexter': {
            name: "Dexter"
        }
    };

    if ($routeParams.id) {
        $scope.dog = $scope.dogs[$routeParams.id];
    }
});
