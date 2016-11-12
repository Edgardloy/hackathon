(function (){
  'user strict';

  angular.module('App.users')
    .factory('UsersService', UsersService)

    UsersService = ['resource'];

    function UsersService($resource){
      var compratori = $resource('/compratori', null, {'save' : {method : 'POST'}, 'update' : {method : 'PUT'}, 'getById' : {method : 'GET'}});
      var produttori = $resource('/produttore', null, {'save' : {method : 'POST'}, 'update' : {method : 'PUT'}, 'getById' : {method : 'GET'}});



    }
})
