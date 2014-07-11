var app = angular.module("myDogs", ['ngRoute', 'ngResource', 'pascalprecht.translate']);

app.config(function ($routeProvider, $translateProvider) {
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

    $translateProvider.translations('en', {
        dogs: {
            title: "We love dogs! (and cats)"
        }
    });
    $translateProvider.translations('wow', {
        dogs: {
            title: "Wow such copys Wow"
        }
    });

    $translateProvider.preferredLanguage('wow');
});

app.factory("Dog", function ($resource) {
    return $resource("/dogs/:id", { id: '@id' });
});

app.controller("DogsController", function ($scope, $routeParams, Dog) {
    if ($routeParams.id) {
        Dog.get({ id: $routeParams.id }, function (dog) {
            $scope.dog = dog;
        });
    } else {
        Dog.query(function (dogs) {
            $scope.dogs = dogs;
        });
    }
});
