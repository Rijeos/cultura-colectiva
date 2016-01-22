'use strict';

angular.module('culturaColectivaApp', [
  'culturaColectivaApp.auth',
  'culturaColectivaApp.admin',
  'culturaColectivaApp.editor',
  'culturaColectivaApp.constants',
  'culturaColectivaApp.services',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
