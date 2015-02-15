export default class FooterController {
	constructor($scope, footerService) {
		this.footerService = footerService;
	}
	get footerText() {
		return this.footerService.appName + " (" + this.footerService.appDescription + ")";
	}
}
FooterController.$inject = ['$scope', 'footerService'];