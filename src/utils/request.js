import axios from 'axios';

function httpGet(url, options) {
    let params = {
        method: "get",
        url: url
    };
    return axios(Object.assign(
        params,
        options
    ));
}

function httpPost(url, data, options) {
    let params = {
        method: "post",
        data: data,
        url: url
    };
    return axios(Object.assign(
        params,
        options
    ));
}

export { httpGet, httpPost };