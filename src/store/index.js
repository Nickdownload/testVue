import Vue from 'vue'
import Vuex from 'vuex'
import folder from './modules/folder'
import user from './modules/users'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        folder,
        user
    }
})