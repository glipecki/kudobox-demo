import ListModule from './list/ListModule';
import AddModule from './add/AddModule';

import KudosService from './KudosService';

angular
	.module('KudosModule', [ListModule, AddModule])
	.factory('KudosService', ['$http', function($http) {
		return new KudosService($http);
	}]);

export default 'KudosModule';