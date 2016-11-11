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
