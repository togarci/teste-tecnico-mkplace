import axios from "axios";


export class produtoService {
    constructor() {
        this.urlPath = 'http://localhost:3000/api';
    }

    getList(params) {
        let url = `${this.urlPath}/list`;
        return axios.get(url, {
            params: params
        }).then(response => response.data);
    }
}