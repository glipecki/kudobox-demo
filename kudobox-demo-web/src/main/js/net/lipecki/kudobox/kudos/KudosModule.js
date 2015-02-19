import ListModule from './list/ListModule';
import AddModule from './add/AddModule';

import KudosService from './KudosService';

angular
	.module('KudosModule', [ListModule, AddModule])
	.service('KudosService', ['$http', '$location', KudosService]);

export default 'KudosModule';