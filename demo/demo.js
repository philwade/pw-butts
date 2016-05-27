var app = angular.module('demo', ['ngMaterial', 'pw-butts']);
app.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('pink')
	.accentPalette('green');
});
