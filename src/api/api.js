import axios from 'axios'
axios.defaults.headers.post[' Content-Type'] = 'applicat ion/x-www-form-urlencoded '
//清求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
})
// 响应拦戴器
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})
//封装axios 的post清求
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
    export default
        mockdata(url, params) {
        return fetch(url, params);
    }
}
