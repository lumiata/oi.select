angular.module('selectDemo')
    .controller('selectFloatinglabelController', function ($scope, ShopArr) {

        $scope.shopArr = ShopArr.query();

        $scope.bundle = null;
    });
