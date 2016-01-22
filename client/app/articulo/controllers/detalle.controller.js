'use strict';

angular.module('culturaColectivaApp')
  .controller('DetalleCtrl', function ($scope,$stateParams,Articulo) {
    $scope.articulo = Articulo.get({id: $stateParams.id});
    $scope.versions =[];
    $scope.version=null;

    $scope.articulo.$promise.then(()=> {
    	$scope.versions = $scope.articulo.Versions;

    	if($stateParams.version){           
    		$scope.version=$scope.versions[$stateParams.version -1];
    	}else{          
    		$scope.version= $scope.versions [0];
    	}    	

    });
    
  });
