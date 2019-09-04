import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

import index from './components/index'
import NotFound from './components/404'
import login from './components/login'
import register from './components/register'


const router = new VueRouter({//test
    mode: "history",
    routes: [
        { path: "/", redirect: "/index" },
        { path: "*", component: NotFound },
        { path: "/index", component: index },
        { path: "/login", component: login },
        { path: "/register", component: register }
    ]
})


//路由拦截
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.eleToken ? true : false;

    if (to.path == '/login' || to.path == '/register') {
        next();
    } else {
        isLogin ? next() : next('/login');
    }

})


export default router;