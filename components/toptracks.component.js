(function() {

	'use strict';

	var topTracks = {
		templateUrl: "./components/toptracks.component.html",
		controller: topCtrlTrack
	};

	angular
		.module('topten')
		.component('topTracks', topTracks);

	topCtrlTrack.$inject = ['apitracks'];
	function topCtrlTrack(apitracks) {
		var toptracks = this;

		toptracks.characters = null;
		toptracks.apiData = apitracks.get()
			.$promise.then(function(response) {
				toptracks.characters = response.tracks.track;
			})
	}
})();