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
	subscribeToKudosTopic(callback) {
		let socket = new SockJS('/api/websocket', undefined, { debug : false });
		this.stompClient = Stomp.over(socket);
		this.stompClient.debug = null;
		this.stompClient.connect({}, (frame) => {
			this.stompClient.subscribe('/topic/kudos', (data) => {
				callback(JSON.parse(data.body));
			});
		});
	}
	closeKudosTopic() {
		this.stompClient.disconnect();
		this.stompClient = undefined;
	}
}
