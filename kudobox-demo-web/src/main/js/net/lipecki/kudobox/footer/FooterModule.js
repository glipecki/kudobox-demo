import FooterController from './FooterController'
import FooterService from './FooterService'

angular
	.module('FooterModule', [])
	.controller('FooterController', ['$scope', 'FooterService', FooterController])
	.service('FooterService', [FooterService]);

export default 'FooterModule';