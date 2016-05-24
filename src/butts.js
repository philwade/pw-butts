'use strict';

angular.module('pw-butts', [])
	.directive('butt', function() {
		return {
			restrict: 'E',
			template: '(_I_)'
		};
	})
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
