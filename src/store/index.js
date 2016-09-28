import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
	state :{
		test :'123',
		wheet:'456'
	},
    actions,
    getters,
    modules: {
        user
    }
})
