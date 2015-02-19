import ListModule from './list/ListModule';
import AddModule from './add/AddModule';

import KudosService from './KudosService';
import KudosWsService from './KudosWsService';

angular
	.module('KudosModule', [ListModule, AddModule])
	.service('KudosService', ['$http', KudosService])
	.service('KudosWsService', ['$location', KudosWsService])

export default 'KudosModule';