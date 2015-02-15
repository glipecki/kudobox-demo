export default class AddController {
	constructor(kudosService, $scope, toastr, $state) {
		this.kudosService = kudosService;
		this.$scope = $scope;
		this.toastr = toastr;
		this.$state = $state;

		this.$scope.empty = {};
		this.reset();
	}
	save(kudos) {
		let controller = this;
		this.kudosService.addKudos(kudos)
				.success(function(data, status, headers, config) {
					controller.toastr.success('Dzięki za dodanie kudos\'a!', 'Kudos dodany');
					controller.reset();
					controller.$state.transitionTo('list');
				}).error(function(data, status, headers, config) {
					controller.toastr.error('Nie udało się dodać kudos\'a :( Spróbujesz ponownie?.', 'Błąd dodawania kudos\'a!');
				});
	}
	reset() {
		this.$scope.kudos = angular.copy(this.$scope.empty);
		if (this.$scope.form) {
			this.$scope.form.$setPristine();
      		this.$scope.form.$setUntouched();
      	}
	}
	isInvalid(field) {
		return this.isTouchedOrSubmitted(field) && field.$invalid;
	}
	isValid(field) {
		return this.isTouchedOrSubmitted(field) && !field.$invalid;
	}
	isTouchedOrSubmitted(field) {
		return this.$scope.$submitted || field.$touched;
	}
}