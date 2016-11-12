(function () {
	'use strict';

	angular.module('App.azienda')
		.config(config);

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'AziendaController as vm',
				templateUrl: '/App/view/azienda/template/azienda.template.html',
				resolve: {
					resol: function (AziendaService) {
						return AziendaService.get();
					}
				}
			})
			.when('/azienda', {
				controller: 'AziendaController as vm',
				templateUrl: '/App/view/azienda/template/azienda.template.html',
				resolve: {
					resol: function (AziendaService) {
						return AziendaService.get();
					}
				}
			})
			.when('/azienda/details/:id', {
				controller: 'AziendaDetailsController as vm',
				templateUrl: '/App/view/azienda/template/azienda.details.template.html'
			});
	}
})();
