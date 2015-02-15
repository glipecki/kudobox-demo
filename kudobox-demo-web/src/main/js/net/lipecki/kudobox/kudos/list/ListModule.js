import ListController from './ListController';

angular
	.module('ListModule', [])
	.controller('ListController', ['KudosService', 'kudos', function(kudosService, kudos) {
		return new ListController(kudosService, kudos);
	}])
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('list', {
				url: '/list',
				templateUrl: 'net/lipecki/kudobox/kudos/list/list.tpl.html',
				controller: 'ListController',
				controllerAs: 'listController',
				resolve: {
					kudosService: 'KudosService',
					kudos: function(kudosService) {
						return kudosService.getKudos();
					}
				}
			});
	}]);

export default 'ListModule';