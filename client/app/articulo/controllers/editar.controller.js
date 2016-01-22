'use strict';

angular.module('culturaColectivaApp')
.controller('EditarCtrl', function ($scope,$stateParams,$state,Articulo,Version) {
    $scope.articulo = Articulo.get({id: $stateParams.id});


    $scope.articulo.$promise.then(()=> {
    	$scope.version=$scope.articulo.Versions[0];        
    });

    $scope.update = () => {
        Version.update($scope.version, () => {
           $state.go('articuloDetalle', {id: $scope.version.ArticuloId});
       }); 
    };
    
});
