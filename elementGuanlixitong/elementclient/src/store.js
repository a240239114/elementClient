import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


/*** 
 * 
 * 是否认证:isAuthentication
 * 
 * 用户信息:user
 * 
 * 
 * */

//stateType

const stateType = {
    SET_IS_AUTHENTICATION: 'SET_IS_AUTHENTICATION',
    SET_USER: 'SET_USER'
}


//state
const state = {
    isAuthentication: false,
    user: ''
}

//getters
const getters = {
    isAuthentication:state=>state.isAuthentication,
    user:state=>state.user
}


//mutations
const mutations = {
    [stateType.SET_IS_AUTHENTICATION]: (state, flag) => {//设置是否认证
        flag ? state.isAuthentication = flag : state.isAuthentication = false;
    },
    [stateType.SET_USER]: (state, user) => {//设置用户详情
        user ? state.user = user : state.user = {};
    }
}

//actions
const actions = {
    [stateType.SET_IS_AUTHENTICATION]: ({ commit }, flag) => {
        commit('[stateType.SET_IS_AUTHENTICATION]', flag);
    },
    [stateType.SET_USER]:({commit},user)=>{
        commit('[stateType.SET_USER]', user);
    }
}


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store;