export default class ListController {
	constructor(kudosService, kudos, $scope) {
		this.kudosService = kudosService;
		this.kudos = kudos.data;
		this.$scope = $scope;

		this.kudosService.subscribeToKudosTopic((kudos) => { this.kudosArrived(kudos); });
		$scope.$on('$destroy', () => {
			this.kudosService.closeKudosTopic();
		});
	}
	kudosArrived(kudos) {
		this.kudos.push(kudos);
		this.$scope.$apply();
	}
}