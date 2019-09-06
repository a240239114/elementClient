import axios from 'axios';
import { Loading, Message } from 'element-ui';
import router from './router';


let loading;

function startLoading() {
    loading = Loading.service({
        text: "正在加载中....",
        lock: true,
        background: 'rgba(0,0,0,0.7)'
    })
}

function closeLoading() {
    loading.close()
}


//请求拦截器
axios.interceptors.request.use(config => {
    startLoading();
    if (localStorage.eleToken) config.headers.Authorization = localStorage.eleToken;
    return config;
}, error => {
    return Promise.reject(error)
})

//响应拦截器
axios.interceptors.response.use(response => {
    closeLoading();
    return response;
}, error => {
    closeLoading();
    const { status } = error.response;

    if (status == 401) {
        Message.error("token已经过期,请重新登录");
        localStorage.removeItem('eleToken');
        router.push('/login')
    }

    return Promise.reject(error);
})

export default axios;
