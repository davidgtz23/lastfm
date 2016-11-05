(function() {

	'use strict';

	var topArtists = {
		templateUrl: "./components/topartists.component.html",
		controller: topCtrl
	};

	angular
		.module('topten')
		.component('topArtists', topArtists);

	topCtrl.$inject = ['apilast'];
	function topCtrl(apilast) {
		var top = this;

		top.characters = null;
		top.apiData = apilast.get()
			.$promise.then(function(response) {
				top.characters = response.artists.artist;
			})
	}
})();