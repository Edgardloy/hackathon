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
