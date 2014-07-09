var myApp = angular.module('myApp', []);

myApp.constant('apiKey', 'f31d4e0b5d8d36f4f5c964da17938176'); 

myApp.factory('Player', function (apiKey) {
    var dummyPlayer = {
        name: "David",
        skill: "5"
    };

    console.log("Using api key " + apiKey);
    return {
        find: function () {
            return dummyPlayer;
        }
    };
});

myApp.service('Bet', function (apiKey) {
    var dummyBet = {
        coins: "1000"
    };

    console.log("Using api key " + apiKey);

    this.find = function () {
        return dummyBet;
    };
});

myApp.provider('Dog', function () {
    var breed = 'Beagle';

    this.setBreed = function (_breed) {
        breed = _breed;
    };

    this.$get = function () {
        return {
            find: function () {
                return {
                    name: "Boira",
                    breed: breed
                }
            }
        }
    };
});

myApp.config(function (DogProvider, apiKey) {
    DogProvider.setBreed("Golden Retriever");
});

myApp.run(function ($rootScope, Player, Bet, Dog) {
    $rootScope.player = Player.find();
    $rootScope.bet = Bet.find();
    $rootScope.dog = Dog.find();
});
