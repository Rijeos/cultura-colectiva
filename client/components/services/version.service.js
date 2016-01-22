'use strict';

(function() {

function VersionResource($resource) {
 return $resource('/api/version/:id',{ // porque en plural articulos
  id:'@_id'

 },{
 	update: {method:'PUT'}
 });
}


angular.module('culturaColectivaApp.services')
  .factory('Version', VersionResource);

})();
