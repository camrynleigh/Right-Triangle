var app = angular.module('rightTriangle', []);

app.service("RightTriangleService", [function () {
    this.findArea = function (base, height) {
        return 0.5 * base * height
    };

    this.calculateHypotenuse = function (base, height) {
        return Math.sqrt((base * base) + (height * height))
    }

}]);

app.controller('TriangleController', ['$scope', "RightTriangleService", function ($scope, RightTriangleService) {
    // here we have a triangle object
    $scope.triangle = {
        base: undefined,
        height: undefined
    };

    $scope.getArea = function () {
        $scope.area = RightTriangleService.findArea($scope.triangle.base, $scope.triangle.height)
    };

    $scope.getHypotenuse = function () {
        $scope.hypotenuse = RightTriangleService.calculateHypotenuse($scope.triangle.base, $scope.triangle.height)
    };


}]);