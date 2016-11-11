angular.module('App')
	.directive('azienda', [function () {

		function miao(scope, elem, attrs, ctrl) {
			
		}

		return {
			restrict: 'E',
			controller: 'AziendaDirController as vm',
			templateUrl: '/App/view/shared/aziendaDir/template/azienda.html',
			scope: {
				details: '@'
			},
			link: miao
			// transclude: false
		}
	}]);