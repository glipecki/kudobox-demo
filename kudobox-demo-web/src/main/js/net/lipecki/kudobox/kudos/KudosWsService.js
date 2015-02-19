export default class KudosWsService {
	constructor($location) {
		this.$location = $location;
	}
	subscribeToKudosTopic(callback) {
		let wsUrl = this.getWsSocketUrl();
		let socket = new SockJS(wsUrl, undefined, { debug : false });
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
	getWsSocketUrl() {
		let url = '';
		if (this.$location.host().indexOf("cfapps.io") > -1 ) {
			url = 'https://' + this.$location.host() + ':4443';
		}
		return url + '/api/websocket';
	}
}