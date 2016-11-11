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
