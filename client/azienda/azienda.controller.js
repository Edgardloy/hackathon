(function () {
	'use strict';

	angular.module('App.azienda')
		.controller('AziendaController', AziendaController);

	AziendaController.$inject = ['resol', 'AziendaService', '$location'];

	function AziendaController(resol, AziendaService, $location) {
		var vm = this;

		vm.aziende = resol;

		vm.sortBy = function (order) {
			vm.reverse = (vm.sortParam === order) ? !vm.reverse : false;
			return vm.sortParam = order;
		}

		vm.getAziendaByID = function (id) {
			$location.path('/azienda/details/' + id);
		}
	}
})();