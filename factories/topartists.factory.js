(function() {

	'use strict';

	angular
		.module('topten')
		.factory('apilast', apilast);

	apilast.$inject = ['$resource'];
	function apilast($resource) {
		return $resource('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e0f652280b7e77344fd0cc433ec75376&format=json');
	}

})();