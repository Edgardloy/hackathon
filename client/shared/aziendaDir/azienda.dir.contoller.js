(function () {
	'use strict';

	angular.module('App.azienda')
		.controller('AziendaDirController', AziendaDirController);

	AziendaDirController.$inject = ['$scope', 'AziendaService', '$location'];

	function AziendaDirController($scope, AziendaService, $location) {
		var vm = this;
		vm.azienda = JSON.parse($scope.details);

		vm.cambiare = function (dati) {
			console.log(dati);
			if(dati){
				vm.azienda.nome = dati.nome || vm.azienda.nome;
				vm.azienda.sito = dati.sito || vm.azienda.sito;
				vm.azienda.mail = dati.mail || vm.azienda.mail;
				AziendaService.save(vm.azienda);
			}
			$location.path('azienda/');
			return;
		}
	}
})();