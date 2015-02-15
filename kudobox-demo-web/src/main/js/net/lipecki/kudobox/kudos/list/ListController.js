export default class ListController {
	constructor(kudosService, kudos) {
		this.kudosService = kudosService;
		this.kudos = kudos.data;
	}
}