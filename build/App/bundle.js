(function(){
  'use strict';

  var App = angular.module('App',[
    'ngRoute',

    'App.table',
    'App.azienda'
  ])



 })();

(function () {
	'use strict';

	angular.module('App.azienda', []);
})();
(function(){
  'use strict';

  angular.module('App.table', []);

})();

(function () {
	'use strict';

	angular.module('App.azienda')
		.config(config);

	function config($routeProvider) {
		$routeProvider
			.when('/azienda', {
				controller: 'AziendaController as vm',
				templateUrl: '/App/view/azienda/template/azienda.template.html',
				resolve: {
					resol: function (AziendaService) {
						return AziendaService.get();
					}
				}
			}).when('/azienda/details/:id', {
				controller: 'AziendaDetailsController as vm',
				templateUrl: '/App/view/azienda/template/azienda.details.template.html'
			});
	}
})();
(function(){
  'use strict';
  angular.module('App.table')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/table', {
          templateUrl:'/App/view/table/template/table.template.html',
          controller:'TableController',
          controllerAs: 'vm',
          resolve: {
            foo: function(TableService){
              var miao = TableService.myfunction();
              return miao
            }
          }
        })
        .when('/table/utente', {
          templateUrl:'/App/view/table/template/table.template.html',
          controller:'TableController',
          controllerAs: 'vm'

        })
    }
})();

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
	angular.module('App')
		.filter('info', function () {
			return function (input, value) {
				if(!angular.isUndefined(value) && input.length > 0) {
					var arr = [];
					return input.filter(function (x) {
						if(x.mail.indexOf(value) > -1) {
							return arr.push(x);
						}
					});
				}
			}
		}).filter('emailFilter', function () {
			return function (input, value) {
				if(!angular.isUndefined(value) && input.length > 0 && value !== '' ) {
					if(input.indexOf(value) > -1){
						return input.substr(0, input.indexOf(value)) + '..';
					}
				}
				return input;
			}
		}).filter('prova', function () {
			return function (input) {
				if(input.length > 0) {
					var arr = [];
					return input.filter(function (x) {
						var i = x.mail.indexOf('@');
						var dom = x.mail.substr(i + 1);
						if(x.sito.indexOf(dom) > -1) {
							return arr.push(x);
						}
					});
				}
			}
		});

(function () {
	'use strict';

	angular.module('App.azienda')
		.factory('AziendaService', AziendaService);

	AziendaService.$inject = [];

	function AziendaService() {
		var aziende = [{
			id: 0,
			nome: 'Lifecode',
			mail: 'info@lifecode.it',
			sito: 'www.lifecode.it',
			logoUrl: 'http://www.lifecode.co/images/logo.png'
		},
		{
			id: 1,
			nome: 'Mapei',
			mail: 'info@mapei.ru',
			sito: 'www.mapei.ru',
			logoUrl: 'http://www.mapei.com/mapei_images/SponsoredM-PallacanestroReggiana.gif'
		},
		{
			id: 2,
			nome: 'Sida',
			mail: 'info@sida.com',
			sito: 'www.sida.com',
			logoUrl: 'http://www.sidagroup.com/wp-content/uploads/logo/logo-sida.jpg'
		},
		{
			id: 3,
			nome: 'HP',
			mail: 'info@hp.ua',
			sito: 'www.hp.ua',
			logoUrl: 'http://www.www8-hp.com/ru/ru/images/i/hpi/header-footer/caas-hf-v3.2/hpi-hp-logo-pr.gif'
		},
		{
			id: 4,
			nome: 'Dell',
			mail: 'info@dell.com',
			sito: 'www.dell.com',
			logoUrl: 'http://i.dell.com/images/global/brand/ui/logo-wt-bl.png'
		}];

		return {
			get: _get,
			getByID: _getByID,
			save: _save
		}

		function _get() {
			return aziende;
		}
		
		function _getByID(id) {
			return aziende.find(function (el) {
				return el.id == id;
			});
		}

		function _save(elem) {
			aziende.map(function (ogg) {
				if(ogg.id === elem.id){
					ogg.nome = elem.nome;
					ogg.mail = elem.mail;
					ogg.sito = elem.sito;
					return;
				}
			});
		}

	}
})();
(function(){
  'use strict';

  angular.module('App.table')
    .controller('TableController', TableController);

    TableController.$inject=['foo', 'TableService' ];

    function TableController(foo, TableService ){
      var vm = this;
      vm.userInfo= {};



      vm.users = foo;


      //
      // vm.getUsers = function(){
      //   vm.users = TableService.myfunction();
      // }

      vm.getUser = function(user){
        vm.userInfo = angular.copy(user);
      }

      vm.editUser = function(){
        TableService.editUserService(vm.userInfo);
        return vm.userInfo = {};
      }

      vm.saveUser = function(){
        TableService.saveUserService(vm.userInfo);
        return vm.userInfo = {};
      }

      vm.deleteUser = function(user) {
        TableService.deleteUserService(user);
        return;
      }

      vm.sortBy = function (order) {
        // vm.reverse = (vm.sortParam === order) ? !vm.reverse : false;
        // vm.reverse = !vm.reverse;
        return vm.sortParam = order;
      }
    }
})();

(function(){
  'use strict';

  angular.module('App.table')
    .factory('TableService', TableService);

    TableService.$inject = [];

    function TableService(){

      var users = [{
        'id'  : 0,
        'nome' : 'Christian',
        'cognome': 'Pengu',
        'mail': 'Christian@mail.com',
        'citta' : 'Pescara',
        'age': 18
      },{
        'id'  : 1,
        'nome' : 'Marco',
        'cognome': 'Rossi',
        'mail': 'Marco@mail.com',
        'citta' : 'Napoli',
        'age': 23
      },{
        'id'  : 2,
        'nome' : 'Luca',
        'cognome': 'Bianchi',
        'mail': 'Luca@mail.com',
        'citta' : 'Bologna',
        'age': 30
      },{
        'id'  : 3,
        'nome' : 'Dario',
        'cognome': 'Neri',
        'mail': 'Dario@mail.com',
        'citta' : 'Milano',
        'age': 30
      },{
        'id'  : 4,
        'nome' : 'Michele',
        'cognome': 'Blu',
        'mail': 'Michele@mail.com',
        'citta' : 'Roma',
        'age': 30
      },{
        'id'  : 5,
        'nome' : 'Sara',
        'cognome': 'Gialli',
        'mail': 'Sara@mail.com',
        'citta' : 'Torino',
        'age': 30
      }];

      return {
        myfunction : myfunction,
        editUserService: editUserService,
        saveUserService: saveUserService,
        deleteUserService: deleteUserService
      }

      function saveUserService(userSave){
        userSave.id = users.length;
        users.push(userSave);
        return
      }

      function deleteUserService(userDelete){
        users.map(function(value, index){
          if(userDelete.id == value.id){
            users.splice(index, 1);
          }
        });
        return
      }

      function editUserService(userEdit){
        users.map(function(index, value){
          if (index.id == userEdit.id) {
            index.nome = userEdit.nome;
            index.cognome = userEdit.cognome;
            index.age = userEdit.age;
          }
        })
        return
      }

      function myfunction(){
        return users
      }

    }

})();

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
//# sourceMappingURL=build/App/bundle.js.map
