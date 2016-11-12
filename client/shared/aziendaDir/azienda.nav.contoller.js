(function () {
	'use strict';

	angular.module('App.azienda')
		.controller('AziendaNavController', AziendaNavController);

	AziendaNavController.$inject = ['$scope', 'AziendaService', '$location'];

	function AziendaNavController($scope, AziendaService, $location) {
		var vm = this;

		vm.login = function () {
			return $location.path('/login');
		}

		vm.registrare = function () {
			return $location.path('/register');
		}
	}
})();