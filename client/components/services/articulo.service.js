'use strict';

(function() {

function ArticuloResource($resource) {
 return $resource('/api/articulo/:id',{ // porque en plural articulos
  id:'@_id'

 });
}


angular.module('culturaColectivaApp.services')
  .factory('Articulo', ArticuloResource);

})();
