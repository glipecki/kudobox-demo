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
		this.kudosService.addKudos(kudos)
				.success((data, status, headers, config) => {
					this.toastr.success('Dzięki za dodanie kudos\'a!', 'Kudos dodany');
					this.reset();
					this.$state.transitionTo('list');
				}).error((data, status, headers, config) => {
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