(function() {

	'use strict';

	angular
		.module('topten')
		.factory('apitracks', apitracks);

	apitracks.$inject = ['$resource'];
	function apitracks($resource) {
		return $resource('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=e0f652280b7e77344fd0cc433ec75376&format=json');
	}

})();