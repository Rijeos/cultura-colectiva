'use strict';

angular.module('culturaColectivaApp.editor',['froala'])
.controller('EditorCtrl', function ($scope) {
	$scope.myHtml = "<h1>Hello World</h1>"
	$scope.froalaOptions = {
		toolbarButtons : ["bold", "italic", "underline", "|", "align", "formatOL", "formatUL"]    
	};
	$scope.save = (() => {
		console.log('hola');
	});
});
