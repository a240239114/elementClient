import Vue from 'vue';
import App from './App.vue';


import router from './router';

import store from './store';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)



import axios from './http';
Vue.prototype.$axios = axios;

//关闭网页端生产信息提醒
Vue.config.productionTip = false;


new Vue({
    render: c => c(App),
    router,
    store
}).$mount("#app")