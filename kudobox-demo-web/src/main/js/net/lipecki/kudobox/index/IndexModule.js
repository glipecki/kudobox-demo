import IndexController from './IndexController';

angular
	.module('IndexModule', [])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('index', {
				url: '/index',
				templateUrl: 'net/lipecki/kudobox/index/index.tpl.html',
	      		controller: IndexController,
	      		controllerAs: 'indexController'
			});
	}]);

export default 'IndexModule';