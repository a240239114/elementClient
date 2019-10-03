import Vue from 'vue';
//族文件入口
import App from './App.vue';

//格式化插件
import "./fileter";

//路由
import router from './router';

//仓储
import store from './store';

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)



//把axios配置到原生的Vue中
import axios from './http';
Vue.prototype.$axios = axios;



//关闭网页端生产信息提醒
Vue.config.productionTip = false;


new Vue({
    render: c => c(App),
    router,
    store
}).$mount("#app")