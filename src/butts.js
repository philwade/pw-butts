'use strict';

angular.module('pw-butts', [])
	.provider('buttFactory', function() {
		 var butts = {
			greg: '<br>(-_-)<br> <))><br> /\\<br>',
			wide: '(___|___)',
			doublewide: '(______|______)',
			raunchy: '(_!_)',
			gross: '(_*_)',
			confused: '(_&_)',
			crinkle: '{_|_}',
			default: '(_I_)',
		};

		this.setButt = function(value, name) {
			if(typeof value === 'object') {
				angular.extend(butts, value);
				return;
			}

			if(typeof name === 'undefined') {
				butts.default = value;
			}
			else {
				butts[name] = value;
			}
		};

		this.$get = function() {
			return {
				getButt: function(name) {
					return typeof butts[name] === 'undefined' ? butts.default : butts[name];
				},
			};
		};
	})
	.directive('butt', ['buttFactory', function(buttFactory) {
		return {
			restrict: 'E',
			scope: {
				type: '@'
			},
			template: function(element, attrs) {
				return buttFactory.getButt(attrs.type)
			}
		};
	}])
	.directive('butts', function() {
		return {
			restrict: 'E',
			scope: {
				count: '@',
				type: '@'
			},
			template: function(element, attrs) {
				var butts = '';
				var count = attrs.count;
				var type = attrs.type;
				if(!count) {
					count = 3;
				}

				for(var i = 0; i < count; i++) {
					if(!type) {
						butts += "<butt></butt>";
					} else {
						butts += "<butt type='" + type  + "'></butt>";
					}

				}
				return butts;
			}
		}
	});
