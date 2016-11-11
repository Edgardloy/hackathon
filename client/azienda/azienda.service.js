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