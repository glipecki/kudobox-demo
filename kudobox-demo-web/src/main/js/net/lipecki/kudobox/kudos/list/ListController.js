export default class ListController {
	constructor(kudosService, kudosWsService, kudos, $scope) {
		this.kudosService = kudosService;
		this.kudosWsService = kudosWsService;
		this.kudos = kudos.data;
		this.$scope = $scope;

		this.prepareComet();
	}
	kudosArrived(kudos) {
		this.kudos.push(kudos);
		this.$scope.$apply();
	}
	prepareComet() {
		this.kudosWsService.subscribeToKudosTopic((kudos) => { this.kudosArrived(kudos); });
		this.$scope.$on('$destroy', () => {
			this.kudosWsService.closeKudosTopic();
		});
	}
}