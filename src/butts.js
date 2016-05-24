'use strict';

angular.module('pw-butts', [])
	.provider('buttFactory', function() {
		 var butts = {
			default: '(_I_)',
		};

		this.setButt = function(value, name) {
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
			template: buttFactory.getButt()
		};
	}])
	.directive('butts', function() {
		return {
			restrict: 'E',
			scope: {
				count: '@'
			},
			template: function(element, attrs) {
				var butts = '';
				var count = attrs.count;
				if(!count) {
					count = 3;
				}

				for(var i = 0; i < count; i++) {
					butts += "<butt></butt>";
				}
				return butts;
			}
		}
	});
