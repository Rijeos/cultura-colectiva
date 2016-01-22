'use strict';

angular.module('culturaColectivaApp.editor')
  .config(function ($stateProvider) {
    $stateProvider
      .state('editor', {
        url: '/editor',
        templateUrl: 'app/editor/editor.html',
        controller: 'EditorCtrl'
      });
  });
