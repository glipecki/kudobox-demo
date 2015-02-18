export default class ListController {
	constructor(kudosService, kudos, $scope) {
		this.kudosService = kudosService;
		this.kudos = kudos.data;
		this.$scope = $scope;

		this.prepareComet();
	}
	kudosArrived(kudos) {
		this.kudos.push(kudos);
		this.$scope.$apply();
	}
	prepareComet() {
		this.kudosService.subscribeToKudosTopic((kudos) => { this.kudosArrived(kudos); });
		this.$scope.$on('$destroy', () => {
			this.kudosService.closeKudosTopic();
		});
	}
}