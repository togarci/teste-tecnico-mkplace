import axios from "axios";

export class listService {
	constructor() {
		this.urlPath = 'http://localhost:3000/api/list';
	}

	getList(params) {
		return axios.get(this.urlPath, {
			params: params
		}).then(response => response.data);
	}

	postList(data) {
		return axios.post(this.urlPath, data).then(response => response.data);
	}
}