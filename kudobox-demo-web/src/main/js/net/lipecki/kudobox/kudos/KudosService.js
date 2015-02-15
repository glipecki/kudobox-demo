export default class KudosService {
	constructor($http) {
		this.$http = $http;
	}
	addKudos(kudos) {
		return this.$http.post('/api/v1/addKudos', kudos);
	}
	getKudos() {
		return this.$http.get('/api/v1/kudos');
	}
}