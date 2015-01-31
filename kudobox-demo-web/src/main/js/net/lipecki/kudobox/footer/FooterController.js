export default class FooterController {
	constructor($scope, footerService) {
		this.footerService = footerService;

		this.name = 'initial';
	}
	sayHello() {
		return "Hello world from FooterController!";
	}
	get footerText() {
		return this.footerService.appName + " (" + this.footerService.appDescription + ")";
	}
}