import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { Message } from 'element-ui';






const register = () =>
    import ('./components/register.vue');
const login = () =>
    import ('./components/login.vue');
const index = () =>
    import ('./components/index.vue');
const home = () =>
    import ('./child/home.vue');
const moneyWater = () =>
    import ('./child/moneyWater.vue');
const userInfo = () =>
    import ('./child/userInfo.vue');
const notFound = () =>
    import ('./components/404.vue');



const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "*", component: notFound },
        { path: "/register", component: register },
        { path: "/login", component: login },
        {
            path: "/index",
            component: index,
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