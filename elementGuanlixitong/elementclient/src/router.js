import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { Message } from 'element-ui';
import register from './components/register';
import login from './components/login';

import index from './components/index';
import home from './child/home';


import moneyWater from './child/moneyWater';
import userInfo from './child/userInfo';
import notFound from "./components/404";

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "*", component: notFound },
        { path: "/register", component: register },
        { path: "/login", component: login },
        {
            path: "/index", component: index,
            children: [
                { path: '/home', component: home },
                { path: '/moneyWater', component: moneyWater },
                { path: '/userInfo', component: userInfo },
            ]
        }
    ]
})


router.beforeEach((to, from, next) => {
    const isLoading = localStorage.eleToken ? true : false;
    // console.log(isLoading);
    if (to.path == "/login" || to.path == "/register") {
        next()
    } else {
        if (isLoading) {
            next()
        } else {
            Message.success("请先登录,亲")
            next('/login')
        }
    }
})

export default router;



