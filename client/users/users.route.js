(function(){
  'use strict';

  angular.module('App.users')
    .config(config);

  function config($routeProvider){
    $routeProvider
      .when('/login', {
        controller: 'UsersController',
        controllerAs: 'vm',
        templateUrl: '/App/view/users/template/users.template.login.html'
      })
      .when('/register', {
        controller: 'UsersController',
        controllerAs: 'vm',
        templateUrl: '/App/view/users/template/users.template.register.html'
      });
  }
})();
