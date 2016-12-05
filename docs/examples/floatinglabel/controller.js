angular.module('selectDemo')
    .controller('selectFloatinglabelController', function ($scope, ShopArr, LongOptions) {

        $scope.shopArr = ShopArr.query();
        $scope.longOptions = LongOptions.query();

        $scope.bundle = null;
        $scope.bundle2 = {
            "id": 5,
            "name": "shirt",
            "category": "clothes"
        };
        $scope.bundle3 = null;

    });
