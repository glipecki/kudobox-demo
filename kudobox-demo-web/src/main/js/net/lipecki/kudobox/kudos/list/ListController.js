export default class ListController {
	constructor(kudosService, kudos, $scope) {
		console.log($scope);
		this.kudosService = kudosService;
		this.kudos = kudos.data;
		this.$scope = $scope;

		this.socket = new SockJS('/api/websocket', undefined, { debug : false });
        this.stompClient = Stomp.over(this.socket);
        this.stompClient.debug = null;
        this.stompClient.connect({}, (frame) => {
			this.stompClient.subscribe('/topic/kudos', (data) => {
				this.kudosArrived(JSON.parse(data.body));
			});
		});
	}
	kudosArrived (kudos) {
		this.kudos.push(kudos);
		this.$scope.$apply();
	}
}