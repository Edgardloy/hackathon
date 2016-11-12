(function () {
	'use strict';

	angular.module('App.azienda')
		.config(config);

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'AziendaController as vm',
				templateUrl: '/App/view/azienda/template/azienda.template.html'
			});
	}
})();