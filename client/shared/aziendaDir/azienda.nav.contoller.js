(function () {
	'use strict';

	angular.module('App.azienda')
		.controller('AziendaNavController', AziendaNavController);

	AziendaNavController.$inject = ['$scope', 'AziendaService', '$location'];

	function AziendaNavController($scope, AziendaService, $location) {
		var vm = this;

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