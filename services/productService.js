import axios from "axios";

export class productService {
	constructor() {
		this.urlPath = 'http://localhost:3000/api';
	}

	getProduct() {
		let url = `${this.urlPath}/product`;
		return axios.get(url).then(response => response.data);
	}

	postUploadImg(data) {
		let url = `${this.urlPath}/upload`;
		return axios.post(url, data).then(response => response.data);
	}
}