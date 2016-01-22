'use strict';

angular.module('culturaColectivaApp.auth', [
  'culturaColectivaApp.constants',
  'culturaColectivaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
