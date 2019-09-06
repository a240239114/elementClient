import Vue from 'vue';
import aixos from './http';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI)
Vue.prototype.$axios = aixos;
Vue.config.productionTip = false;


new Vue({
    render: c => c(App),
    router,
    store
}).$mount("#app")