(function(){
  'use strict';

  angular.module('App')
    .controller('UserController', UserController);

        UserController.$inject = [];

        function UserController(){
          var vm = this;
          vm.users = [{
            'nome' : 'Christian',
            'cognome': 'Pengu',
            'age': 18
          },{
            'nome' : 'Marco',
            'cognome': 'Rossi',
            'age': 23
          },{
            'nome' : 'Luca',
            'cognome': 'Bianchi',
            'age': 30
          }
        ];

          vm.print= function(){
            console.info(vm.saluta);
            // vm.saluta = 'Ciao ' +vm.user.nome + ' ' + vm.user.cognome + ' ' + vm.user.age;
            console.log(vm.saluta);

          }

        }

})();
