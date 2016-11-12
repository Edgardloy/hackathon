(function (){
  'use strict';

  angular.module('App.users')
    .controller('UsersController', UsersController);

  UsersController.$inject = ['$location'];

  function UsersController($location) {
    var vm = this;

    vm.moveToRegister = function(){
      $location.path('/register');
    };

    vm.moveToLogin = function(){
      $location.path('/login');
    };

    

  }
})();
