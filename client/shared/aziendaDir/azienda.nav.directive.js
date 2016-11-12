angular.module('App')
	.directive('navMenu', [function () {

		function miao(scope, elem, attrs, ctrl) {
			
		}

		return {
			restrict: 'E',
			controller: 'AziendaNavController as vm',
			templateUrl: '/App/view/shared/aziendaDir/template/navMenu.html',
			scope: {
				details: '@'
			},
			link: miao
			// transclude: false
		}
	}]);