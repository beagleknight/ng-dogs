var myApp = angular.module('myApp', []);

myApp.controller("DogsController", function ($scope) {
    $scope.dogs = [];

    $scope.addDog = function () {
        $scope.dogs.push({
            name: "New dog " +new Date,
            food: 0
        });
    };

    $scope.removeDog = function (index) {
        $scope.dogs.splice(index, 1);
    };
});

myApp.controller("FoodController", function ($scope) {
    $scope.addFood = function () {
        $scope.dog.food += 10;
    };
});

myApp.filter("cute", function () {
    return function (input) {
        return "My cute " + input;
    };
});
