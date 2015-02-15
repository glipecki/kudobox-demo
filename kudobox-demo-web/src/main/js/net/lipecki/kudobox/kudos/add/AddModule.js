import AddController from './AddController';

angular
	.module('AddModule', [])
	.controller('AddController', ['KudosService', '$scope', 'toastr', '$state', AddController])
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('add', {
				url: '/add',
				templateUrl: 'net/lipecki/kudobox/kudos/add/add.tpl.html',
				controller: 'AddController',
				controllerAs: 'addController'
			});
	}]);

export default 'AddModule';