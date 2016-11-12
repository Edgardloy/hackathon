(function () {
	'use strict';

	angular.module('App.azienda')
		.controller('AziendaController', AziendaController);

	AziendaController.$inject = ['AziendaService', '$location'];

	function AziendaController(AziendaService, $location) {
		var vm = this;
	}
})();