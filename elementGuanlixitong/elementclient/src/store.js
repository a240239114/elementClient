import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/*
   isAuthorization : 是否认证登录
   user:用户详情
*/

//stateType->mutations和actions用到
const stateType = {
    SET_IS_AUTHORIZATION: 'SET_IS_AUTHORIZATION',
    SET_USER: 'SET_USER'
}

//state
const state = {
    isAuthorization: false,
    user: null
}

//getters
const getters = {
    getAuthorization: state => state.isAuthorization,
    getUser: state => state.user
}


//mutations
const mutations = {
    [stateType.SET_IS_AUTHORIZATION]: (state, flag) => {
        // console.log(flag)
        state.isAuthorization = flag;
    },
    [stateType.SET_USER]: (state, obj) => {
        obj ? state.user = obj : {};
    }
}


//actions
const actions = {
    [stateType.SET_IS_AUTHORIZATION]: ({ commit }, flag) => {
        commit(stateType.SET_IS_AUTHORIZATION, flag);
    },
    [stateType.SET_USER]: ({ commit }, obj) => {
        commit(stateType.SET_USER, obj);
    },

    clearState: ({ commit }, flag) => {
        commit(stateType.SET_IS_AUTHORIZATION, flag);

        commit(stateType.SET_USER, {})
    }
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})