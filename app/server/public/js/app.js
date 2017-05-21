var app = angular.module('GridUser', ['ngTable']);

app.filter('firstToUpper', function () {
    return function (word) {
        return word ? word.replace(/\w\S*/g, function (str) { return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();}) : '';
    };
});

app.filter('justinitial', function () {
    return function (surname) {
        return surname[0].toUpperCase() + '.';
    }
});