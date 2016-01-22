'use strict';

angular.module('culturaColectivaApp')
  .controller('ArticuloCtrl', function ($scope,$state,Version) {
    $scope.version = new Version;

    $scope.save = () => {
    	$scope.version.$save(()=>{
    		$state.go('articuloDetalle',{ id: $scope.version.ArticuloId});
    	});
    };
  });