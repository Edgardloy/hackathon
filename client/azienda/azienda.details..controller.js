(function () {
	'use strict';

	angular.module('App.azienda')
		.controller('AziendaDetailsController', AziendaDetailsController);

	AziendaDetailsController.$inject = ['AziendaService', '$routeParams'];

	function AziendaDetailsController(AziendaService, $routeParams) {
		var vm = this;

		vm.getDetails = function () {
			vm.azienda = AziendaService.getByID($routeParams.id);
		}
		
	}
})();