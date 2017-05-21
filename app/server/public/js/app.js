var app = angular.module('GridUser', ['ngTable']);

app.filter('firstToUpper', function () {
    return function (word) {
        return word ? word.charAt(0).toUpperCase() + word.substr(1).toLowerCase() : '';
    };
});