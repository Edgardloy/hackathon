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
