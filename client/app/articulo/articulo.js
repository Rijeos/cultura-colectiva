'use strict';

angular.module('culturaColectivaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('articulo', {
        url: '/articulo/new',
        templateUrl: 'app/articulo/templates/articulo.html',
        controller: 'ArticuloCtrl'
      })
      .state('articuloDetalle', {
        url: '/articulo/:id',
        templateUrl: 'app/articulo/templates/detalle.html',
        controller: 'DetalleCtrl'
      })
      .state('articuloEditarVersion', {
        url: '/articulo/:id/edit',
        templateUrl: 'app/articulo/templates/editar.html',
        controller: 'EditarCtrl'
      })
      .state('articuloDetalleVersion', {
        url: '/articulo/:id/:version',
        templateUrl: 'app/articulo/templates/detalle.html',
        controller: 'DetalleCtrl'
      });
  });
