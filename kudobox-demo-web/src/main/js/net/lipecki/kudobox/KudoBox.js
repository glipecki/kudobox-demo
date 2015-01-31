import FooterModule from './footer/FooterModule';
import IndexModule from './index/IndexModule';

angular
	.module('kudobox', ['ui.router', FooterModule, IndexModule])
	.config(['$urlRouterProvider', function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
	}]);

export default 'kudobox';