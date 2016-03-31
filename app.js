var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope) {
  $scope.name = "Severus Snape";
})

var yearsInCentury = 100;
var daysInYear = 365;
var hoursInDay = 24;
var minutesInHour = 60;
var secondInMinute = 60;

var secondsInCentury = secondInMinute * minutesInHour * hoursInDay * daysInYear * yearsInCentury;

app.controller("ExercisesController", function($scope) {
  $scope.FavColor = "red";
  $scope.secondsInCentury = secondsInCentury;
  $scope.currentTime = Date.now();
})