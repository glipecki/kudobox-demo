import FooterModule from './footer/FooterModule';
import IndexModule from './index/IndexModule';
import KudosModule from './kudos/KudosModule';

angular
	.module('kudobox', ['ui.router', 'ngAnimate', 'toastr', FooterModule, IndexModule, KudosModule])
	.config(['$urlRouterProvider', '$compileProvider', function($urlRouterProvider, $compileProvider) {
		$urlRouterProvider.otherwise('/list');
		$compileProvider.debugInfoEnabled(false);
	}]);

export default 'kudobox';