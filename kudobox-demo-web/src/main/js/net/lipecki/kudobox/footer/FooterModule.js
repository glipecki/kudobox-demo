import FooterController from './FooterController'
import FooterService from './FooterService'

angular
	.module('FooterModule', ['ui.router'])
	.controller('FooterController', ['$scope', 'FooterService', FooterController])
	.service('FooterService', [FooterService]);

export default 'FooterModule';